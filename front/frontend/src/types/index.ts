export interface WasteAnalysisResult {
  id?: string;
  category: 'plastic' | 'paper' | 'glass' | 'metal' | 'electronics' | 'organic' | 'other';
  material: string;
  recyclable: boolean;
  destination: string;
  preparation: string[];
  environmentalTip: string;
  confidence?: number;
}

export interface CollectionPoint {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  acceptedCategories: string[];
  openingHours?: string;
  verified: boolean;
}

export interface DashboardSummary {
  totalAnalyzed: number;
  recyclableCount: number;
  nonRecyclableCount: number;
  categoriesBreakdown: Record<string, number>;
}