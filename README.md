# 🌱 VIRA GYN

### A cidade que transforma resíduos em oportunidades.

O **VIRA GYN** é uma aplicação web que utiliza inteligência artificial para ajudar as pessoas a identificar resíduos, entender como realizar o descarte correto e encontrar pontos de coleta adequados.

Por meio de uma imagem, o usuário pode obter informações sobre determinado material, suas possibilidades de reciclagem e orientações para sua destinação. A proposta é tornar a informação ambiental mais acessível e aproximar os cidadãos de práticas sustentáveis.

---

## 💡 O problema

O descarte incorreto de resíduos é um desafio urbano. Muitas pessoas não sabem identificar se determinado material pode ser reciclado, como prepará-lo para o descarte ou onde encontrar pontos de coleta.

A falta de informação dificulta a destinação adequada dos resíduos e limita oportunidades de reaproveitamento.

## 🚀 Nossa solução

O VIRA GYN busca simplificar esse processo por meio de três funcionalidades principais:

- **Identificação inteligente:** o usuário envia uma foto e a inteligência artificial auxilia na identificação do resíduo.
- **Orientação de descarte:** a aplicação apresenta informações sobre o material, sua possibilidade de reciclagem e como prepará-lo.
- **Pontos de coleta:** um mapa permite consultar locais de recebimento e encontrar alternativas para a destinação dos resíduos.

A aplicação também pode reunir informações sobre as análises realizadas, contribuindo para a visualização dos tipos de resíduos identificados.

## 🤖 Inteligência Artificial

O principal diferencial tecnológico do VIRA GYN é a integração com o **Gemma 4 E2B**, modelo multimodal desenvolvido pelo Google DeepMind.

O modelo é utilizado para analisar imagens e auxiliar na identificação visual dos resíduos, permitindo que a aplicação transforme uma fotografia em informações úteis para orientar o descarte.

A integração com a IA é realizada pelo backend, que organiza e disponibiliza os resultados para a interface.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| Vue.js 3 | Desenvolvimento da interface web |
| TypeScript | Tipagem e organização do código |
| Vite | Ferramenta de desenvolvimento do frontend |
| NestJS | Desenvolvimento do backend e API REST |
| PostgreSQL | Banco de dados relacional |
| Prisma ORM | Comunicação com o banco de dados |
| Gemma 4 E2B | Análise multimodal de imagens |
| Leaflet | Exibição do mapa |
| OpenStreetMap | Dados cartográficos |

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura separada entre frontend e backend, com comunicação por meio de uma API REST.

```text
                 ┌──────────────────────┐
                 │       USUÁRIO        │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │    FRONTEND          │
                 │  Vue.js + TypeScript │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │       BACKEND        │
                 │        NestJS        │
                 └──────────┬───────────┘
                            │
                 ┌──────────┴───────────┐
                 │                      │
                 ▼                      ▼
       ┌──────────────────┐   ┌──────────────────┐
       │     Gemma 4 E2B  │   │    PostgreSQL    │
       │  Análise de IA   │   │  Prisma ORM      │
       └──────────────────┘   └──────────────────┘
```

## ⚙️ Como executar o projeto

### Pré-requisitos

- Node.js
- npm
- Docker e Docker Compose
- PostgreSQL
- Ollama (caso utilizado para executar o modelo localmente)

### 1. Clone o repositório

```bash
git clone https://github.com/kkyo1/vira-gyn.git

cd vira-gyn
```

### 2. Configure as variáveis de ambiente

Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

Configure as variáveis necessárias para o frontend, backend, banco de dados e integração com a inteligência artificial.

### 3. Configure o backend

```bash
cd backend

npm install
```

Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

Inicie o servidor:

```bash
npm run start:dev
```

### 4. Configure o frontend

Em outro terminal:

```bash
cd front

npm install

npm run dev
```

Acesse o endereço disponibilizado pelo Vite no terminal.

### 5. Execute a inteligência artificial

Caso esteja utilizando Ollama, inicie o serviço e disponibilize o modelo Gemma 4 E2B compatível com análise de imagens.

A configuração da integração deve seguir o formato de execução e a disponibilidade do modelo no ambiente utilizado.

---

## 🌍 Impacto esperado

O VIRA GYN busca contribuir para:

- Democratizar o acesso à informação sobre reciclagem.
- Incentivar hábitos de descarte consciente.
- Facilitar a localização de pontos de coleta.
- Aproximar cidadãos de iniciativas de sustentabilidade.
- Gerar informações que possam apoiar futuras ações ambientais.

## 🎯 Objetivos de Desenvolvimento Sustentável (ODS)

O projeto está alinhado principalmente aos seguintes Objetivos de Desenvolvimento Sustentável da ONU:

- **ODS 11 — Cidades e Comunidades Sustentáveis:** incentivo a práticas urbanas mais sustentáveis.
- **ODS 12 — Consumo e Produção Responsáveis:** promoção do descarte adequado e do reaproveitamento de materiais.
- **ODS 13 — Ação Contra a Mudança Global do Clima:** incentivo a práticas que contribuam para a sustentabilidade ambiental.

## 🔮 Próximos passos

O VIRA GYN possui potencial de expansão por meio de:

- Ampliação e atualização da base de pontos de coleta.
- Integração com cooperativas e iniciativas de reciclagem.
- Expansão para outros municípios.
- Geração de indicadores sobre os resíduos identificados.
- Novas funcionalidades de educação ambiental.

## 🤝 Contribuição

O VIRA GYN é um projeto open source. Contribuições são bem-vindas!

Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração:

```bash
git checkout -b feature/minha-funcionalidade
```

3. Faça suas alterações e commits.
4. Envie sua branch:

```bash
git push origin feature/minha-funcionalidade
```

5. Abra um Pull Request.

---

<p align="center">
  🌱 <strong>VIRA GYN</strong>
  <br>
  A cidade que transforma resíduos em oportunidades.
  <br><br>
  <em>O futuro sustentável começa com a forma como escolhemos descartar.</em>
</p>
