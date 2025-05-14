import { useMemo } from 'react';
import type { CompanyInfoProps } from '../types';
import type { MosaicNode } from 'react-mosaic-component';

type MosaicLayoutResult = {
  mosaicLayout: MosaicNode<string> | null;
  mosaicIdMap: Record<string, CompanyInfoProps>;
  
};

export const useMosaicLayout = (
  data: CompanyInfoProps[],
): MosaicLayoutResult => {
  return useMemo(() => {
    if (data.length < 3) {
      return { mosaicLayout: null, mosaicIdMap: {}};
    }

    const sliced = data.slice(0, 3);
    const idMap: Record<string, CompanyInfoProps> = {};
    const tickers: Record<string, string> = {};

    const ids = sliced.map((item, i) => {
      const id = `company-${i}`;
      idMap[id] = item;
      tickers[id] = item.ticker; 
      return id;
    });

    const layout: MosaicNode<string> = {
      direction: 'row',
      first: ids[0],
      second: {
        direction: 'column',
        first: ids[1],
        second: ids[2],
      },
    };
    return { mosaicLayout: layout, mosaicIdMap: idMap, };
  }, [data]);
};