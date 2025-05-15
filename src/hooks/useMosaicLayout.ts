import { useMemo } from 'react';
import type { CompanyInfoProps } from '../types';
import type { MosaicNode } from 'react-mosaic-component';

type MosaicLayoutResult = {
  mosaicLayout: MosaicNode<string> | null;
};

export const useMosaicLayout = (
  data: CompanyInfoProps[],
): MosaicLayoutResult => {
  return useMemo(() => {
    if (data.length < 3) {
      return { mosaicLayout: null, mosaicIdMap: {} };
    }

    const sliced = data.slice(0, 3);

    const ids = sliced.map((_, i) => {
      const id = `company-${i}`;

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
    return { mosaicLayout: layout };
  }, [data]);
};
