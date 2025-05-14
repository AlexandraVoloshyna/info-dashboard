import type { CompanyInfoProps } from '../types';

export const CompanyInfoCard = ({
  ticker,
  name,
  lei,
  legalName,
  stockExchange,
  sic,
  shortDescription,
  longDescription,
  ceo,
  companyUrl,
  businessAddress,
  mailingAddress,
  businessPhoneNo,
  hqAddress1,
  hqAddress2,
  hqAddressCity,
  hqAddressPostalCode,
  entityLegalForm,
  cik,
  latestFilingDate,
  hqState,
  hqCountry,
  incState,
  incCountry,
  employees,
  entityStatus,
  sector,
  industryCategory,
  industryGroup,
  template,
  standardizedActive,
  firstFundamentalDate,
  lastFundamentalDate,
  firstStockPriceDate,
  lastStockPriceDate,
  theaEnabled,
  legacySector,
  legacyIndustryCategory,
  legacyIndustryGroup,
}: CompanyInfoProps) => {
  return (
    <div className="max-w-full min-h-full max-h-11/12 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-auto">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
        {shortDescription}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Ticker: {ticker}
      </p>

      <div className="text-md flex flex-col gap-2 text-gray-600 dark:text-gray-300 space-y-1">
        <p>LEI: {lei}</p>
        <p>Legal Name: {legalName}</p>
        <p>Stock Exchange: {stockExchange}</p>
        <p>SIC: {sic}</p>
        <p>Long Description: {longDescription}</p>
        <p>CEO: {ceo}</p>
        <p>Website: {companyUrl}</p>
        <p>Business Address: {businessAddress}</p>
        <p>Mailing Address: {mailingAddress}</p>
        <p>Phone: {businessPhoneNo}</p>
        <p>HQ Address 1: {hqAddress1}</p>
        <p>HQ Address 2: {hqAddress2}</p>
        <p>City: {hqAddressCity}</p>
        <p>Postal Code: {hqAddressPostalCode}</p>
        <p>Legal Form: {entityLegalForm}</p>
        <p>CIK: {cik}</p>
        <p>Latest Filing Date: {latestFilingDate}</p>
        <p>HQ State: {hqState}</p>
        <p>HQ Country: {hqCountry}</p>
        <p>Incorporation State: {incState}</p>
        <p>Incorporation Country: {incCountry}</p>
        <p>Employees: {employees}</p>
        <p>Status: {entityStatus}</p>
        <p>Sector: {sector}</p>
        <p>Industry Category: {industryCategory}</p>
        <p>Industry Group: {industryGroup}</p>
        <p>Template: {template}</p>
        <p>Standardized Active: {standardizedActive ? 'Yes' : 'No'}</p>
        <p>First Fundamental Date: {firstFundamentalDate}</p>
        <p>Last Fundamental Date: {lastFundamentalDate}</p>
        <p>First Stock Price Date: {firstStockPriceDate}</p>
        <p>Last Stock Price Date: {lastStockPriceDate}</p>
        <p>Thea Enabled: {theaEnabled ? 'Yes' : 'No'}</p>
        <p>Legacy Sector: {legacySector}</p>
        <p>Legacy Industry Category: {legacyIndustryCategory}</p>
        <p>Legacy Industry Group: {legacyIndustryGroup}</p>
      </div>
    </div>
  );
};
