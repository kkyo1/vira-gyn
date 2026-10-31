import {
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';

export interface WasteAnalysisAIResponse {
  category: string;
  material: string;
  recyclable: boolean;
  destination: string;
  preparation: string[];
  environmentalTip: string;
}

@Injectable()
export class GemmaService {
  private readonly baseUrl =
    process.env.OLLAMA_BASE_URL ?? 'http://localhost:11434';

  private readonly model =
    process.env.OLLAMA_MODEL ?? 'gemma4:e2b';

  async analyzeImage(imageBuffer: Buffer): Promise<WasteAnalysisAIResponse> {
    const base64Image = imageBuffer.toString('base64');

    const prompt = `
Você é o assistente especialista em reciclagem do VIRA GYN em Goiânia, Goiás, Brasil.
Analise a imagem do resíduo fornecida e retorne EXCLUSIVAMENTE um objeto JSON válido, sem blocos de código markdown ou texto adicional, seguindo exatamente esta estrutura:
{
  "category": "plastic" | "paper" | "glass" | "metal" | "electronics" | "organic" | "other",
  "material": "Nome específico do material",
  "recyclable": true ou false,
  "destination": "Indicação de destino (ex: Ecoponto Central, Coleta Seletiva)",
  "preparation": ["Passo 1", "Passo 2"],
  "environmentalTip": "Dica curta sobre o impacto ambiental"
}
    `.trim();

    let response: Response;

    try {
      response = await fetch(`${`${this.baseUrl}/api/chat`}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          stream: false,
          format: 'json',
          messages: [
            {
              role: 'system',
              content:
                'Você é o assistente do VIRA GYN. Responda sempre em português, de forma objetiva e estritamente em JSON válido quando solicitado.',
            },
            {
              role: 'user',
              content: prompt,
              images: [base64Image],
            },
          ],
        }),
        signal: AbortSignal.timeout(60000),
      });
    } catch {
      throw new ServiceUnavailableException(
        'Não foi possível conectar ao Gemma 4 pelo Ollama.',
      );
    }

    if (!response.ok) {
      throw new ServiceUnavailableException(
        `O Ollama retornou HTTP ${response.status}.`,
      );
    }

    const result = await response.json();
    const content = result.message.content;

    try {
      return JSON.parse(content) as WasteAnalysisAIResponse;
    } catch {
      throw new ServiceUnavailableException(
        'A IA retornou uma resposta em formato inválido.',
      );
    }
  }
}