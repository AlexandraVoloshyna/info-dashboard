type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

type CamelizeObject<T> = {
  [K in keyof T as SnakeToCamelCase<Extract<K, string>>]: T[K] extends object
    ? CamelizeObject<T[K]>
    : T[K];
};

export type CompanyInfoRaw = {
  id: string;
  ticker: string;
  name: string;
  lei: string;
  legal_name: string;
  stock_exchange: string;
  sic: number;
  short_description: string;
  long_description: string;
  ceo: string;
  company_url: string;
  business_address: string;
  mailing_address: string;
  business_phone_no: string;
  hq_address1: string;
  hq_address2: string | null;
  hq_address_city: string;
  hq_address_postal_code: string;
  entity_legal_form: string;
  cik: string;
  latest_filing_date: string;
  hq_country: string;
  hq_state: string;
  inc_state: string;
  inc_country: string;
  employees: number;
  entity_status: string;
  sector: string;
  industry_category: string;
  industry_group: string;
  template: string;
  standardized_active: boolean;
  first_fundamental_date: string;
  last_fundamental_date: string;
  first_stock_price_date: string;
  last_stock_price_date: string;
  thea_enabled: boolean;
  legacy_sector: string;
  legacy_industry_category: string;
  legacy_industry_group: string;
};

export type CompanyInfoProps = CamelizeObject<CompanyInfoRaw>;

export type SelectOption = {
  label: string;
  value: string;
};

export type TickerSelectProps = {
  options?: SelectOption[];
  value: string;
  onChange: (val: string) => void;
};