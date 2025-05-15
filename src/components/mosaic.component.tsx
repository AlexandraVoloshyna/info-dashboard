import {
  ExpandButton,
  Mosaic,
  MosaicWindow,
  RemoveButton,
  ReplaceButton,
  SplitButton,
} from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import type { CompanyInfoProps, SelectOption } from '../types';
import { CompanyInfoCard } from './company-info-card.component';
import { useMosaicLayout, useTickersSelect } from '../hooks';
import { TickerSelect } from './ticker-select.component';
import { useCallback } from 'react';

type Props = {
  data: CompanyInfoProps[];
  options?: SelectOption[];
};

export const CompaniesInfoMosaic = ({ data, options }: Props) => {
  const { mosaicLayout } = useMosaicLayout(data);
  const { handleTickerChange, selectedTickers } = useTickersSelect();

  const getCompanyData = useCallback(
    (ticker: string) => data.find(company => company.id === ticker),
    [data],
  );

  return (
    <div className="h-[900px] max-w-[1200px] mx-auto">
      <Mosaic<string>
        renderTile={(id, path) => {
          const ticker = selectedTickers[id];
          const companyData = getCompanyData(ticker);
          return (
            <MosaicWindow<string>
              title={companyData?.name as string}
              toolbarControls={
                <div className="flex gap-1 min-h-[80px]">
                  <div className="flex  min-w-[140px] gap-1">
                    <div className='flex flex-col gap-0.5 items-center'>
                      <span className='text-sm text-black'>Replace</span>
                      <ReplaceButton />
                    </div>
                    <div className='flex flex-col gap-0.5 items-center'>
                      <span className='text-sm text-black'>Split</span>
                      <SplitButton />
                    </div>
                    <div className='flex flex-col gap-0.5 items-center'>
                      <span className='text-sm text-black'>Expand</span>
                      <ExpandButton />
                    </div>
                    <div className='flex flex-col gap-0.5 items-center'>
                      <span className='text-sm text-black'>Close</span>
                      <RemoveButton />
                    </div>
                  </div>
                  <TickerSelect
                    options={options}
                    value={ticker}
                    onChange={newTicker => handleTickerChange(id, newTicker)}
                  />
                </div>
              }
              path={path}
              createNode={() => `new-${Date.now()}`}
            >
              <CompanyInfoCard {...(companyData as CompanyInfoProps)} />
            </MosaicWindow>
          );
        }}
        initialValue={mosaicLayout}
      />
    </div>
  );
};
