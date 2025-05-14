import { Mosaic, MosaicWindow } from 'react-mosaic-component';
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
  const { mosaicLayout, mosaicIdMap } = useMosaicLayout(data);
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
          const companyData = ticker ? getCompanyData(ticker) : mosaicIdMap[id];
          return (
            <MosaicWindow<string>
              title={companyData?.name as string}
              toolbarControls={
                <TickerSelect
                  options={options}
                  value={ticker || ''}
                  onChange={newTicker => handleTickerChange(id, newTicker)}
                />
              }
              path={path}
              createNode={() => id}
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
