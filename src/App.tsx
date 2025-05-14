import { CompaniesInfoMosaic } from './components';
import { useFetchData } from './hooks';
import { convertArrayKeysToCamelCase } from './utils';

export const App = () => {
  const { items, selectOptions } = useFetchData();
  return (
    <div className="my-6">
      <CompaniesInfoMosaic
        options={selectOptions}
        data={convertArrayKeysToCamelCase(items)}
      />
    </div>
  );
};
