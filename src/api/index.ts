import type { CompanyInfoRaw, SelectOption } from '../types';
import { tickerSelectOptions } from '../utils';

const BASE_URL = import.meta.env.VITE_BASE_URL;

class FakeApiService {
  async getAll(): Promise<CompanyInfoRaw[]> {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch data');

    const data: CompanyInfoRaw[] = await response.json();

    return data;
  }
  async getSelectOptions(): Promise<SelectOption[] | undefined> {
    const data = await this.getAll();
    return tickerSelectOptions(data);
  }
}

export const fakeApiService = new FakeApiService();
