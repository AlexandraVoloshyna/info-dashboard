import { useState } from 'react';


export const useTickersSelect = (): {
  selectedTickers: Record<string, string>;
  handleTickerChange: (id: string, ticker: string) => void;
} => {
  const [selectedTickers, setSelectedTickers] = useState<
    Record<string, string>
  >({});

  const handleTickerChange = (id: string, ticker: string) => {
    setSelectedTickers(prev => ({ ...prev, [id]: ticker }));
  };

  return { selectedTickers, handleTickerChange };
};
