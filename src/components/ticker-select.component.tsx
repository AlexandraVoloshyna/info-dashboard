import type { TickerSelectProps } from '../types';

export const TickerSelect = ({
  options,
  value,
  onChange,
}: TickerSelectProps) => {
  return (
    <form className="max-w-sm mx-auto mb-6">
      <select
        id="tickers"
        onChange={e => onChange(e.target.value)}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-1 
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled hidden>
          Tickers
        </option>
        {options?.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
        {value && <option value="">Reset Option</option>}
      </select>
    </form>
  );
};
