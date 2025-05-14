import { useEffect, useState } from 'react';
import { fakeApiService } from '../api';
import type { CompanyInfoRaw, SelectOption } from '../types';

export const useFetchData = () => {
  const [items, setItems] = useState<CompanyInfoRaw[]>([]);
  const [selectOptions, setSelectOptions] = useState<SelectOption[]>();
  

   useEffect(() => {
    fakeApiService
      .getAll()
      .then(res => {
        setItems(res);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    fakeApiService
      .getSelectOptions()
      .then(res => {
        setSelectOptions(res);
      })
      .catch(console.error);
  }, []);
  return {
    items,
   
    selectOptions,
   
  };
};