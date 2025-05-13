import type { CompanyInfo } from '../types';

const BASE_URL = import.meta.env.VITE_BASE_URL;;

class FakeApiService {
  async getAll({ ticker }: { ticker?: string }): Promise<CompanyInfo[]> {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch data');

    const data: CompanyInfo[] = await response.json();

    if (!ticker) return data;

    const searchTicker = ticker.toLowerCase();
    return data.filter(item =>
      item.ticker.toLowerCase().includes(searchTicker),
    );
  }
}

export const fakeApiService = new FakeApiService();
