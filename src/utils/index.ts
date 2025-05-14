import type { CompanyInfoProps, CompanyInfoRaw, SelectOption, } from '../types';

const toCamelCase = (str: string): string =>
  str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());

export function convertArrayKeysToCamelCase<T>(
  data: T[],
): CompanyInfoProps[] {
  return data.map(obj => {
    const newObj: Record<string, unknown> = {};
    for (const key in obj) {
      const camelKey = toCamelCase(key);
      newObj[camelKey] = obj[key];
    }
    return newObj as CompanyInfoProps;
  });
}

export const tickerSelectOptions = (
  data?: CompanyInfoRaw[],
): SelectOption[] | undefined => {
  if (!data) return;

  return data.map(info => ({
    label: info.ticker,
    value: info.id,
  }));
};
