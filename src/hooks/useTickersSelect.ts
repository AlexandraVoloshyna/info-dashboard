import { useState } from 'react';
const INITIAL_TICKERS = {
  'company-0': 'com_NX6GzO',
  'company-1': 'com_agj00z',
  'company-2': 'com_0XLDdX',
};

export const useTickersSelect = (): {
  selectedTickers: Record<string, string>;
  handleTickerChange: (id: string, ticker: string) => void;
} => {
  const [selectedTickers, setSelectedTickers] =
    useState<Record<string, string>>(INITIAL_TICKERS);

  const handleTickerChange = (id: string, ticker: string) => {
    setSelectedTickers(prev => ({ ...prev, [id]: ticker }));
  };

  return { selectedTickers, handleTickerChange };
};
