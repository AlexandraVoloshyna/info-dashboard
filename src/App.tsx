import { useEffect, useState, } from 'react';
// import type { CompanyInfo } from './types';
import { fakeApiService } from './api';

export const App = () => {
  // const [items, setItems] = useState<CompanyInfo[]>([]);
   const [search] = useState('');

  useEffect(() => {
    fakeApiService
      .getAll({ticker: search})
      .then(res => console.log(res))
      .catch(console.error);
  }, [search]);
  return <div></div>;
};
