import axios from 'axios';
import type { WasteAnalysisResult, CollectionPoint, DashboardSummary } from '../types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 30000,
});

export const WasteService = {
  async analyzeImage(imageFile: File): Promise<WasteAnalysisResult> {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await api.post<WasteAnalysisResult>('/waste/analyze', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

export const PointsService = {
  async getPoints(category?: string): Promise<CollectionPoint[]> {
    const response = await api.get<CollectionPoint[]>('/collection-points', {
      params: { category },
    });
    return response.data;
  },
};

export const DashboardService = {
  async getSummary(): Promise<DashboardSummary> {
    const response = await api.get<DashboardSummary>('/dashboard/summary');
    return response.data;
  },
};

export default api;