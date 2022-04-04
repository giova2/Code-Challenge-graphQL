import { gql } from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export enum LanguageCode {
  Af = 'af',
  Ak = 'ak',
  Sq = 'sq',
  Am = 'am',
  Ar = 'ar',
  Hy = 'hy',
  As = 'as',
  Az = 'az',
  Bm = 'bm',
  Bn = 'bn',
  Eu = 'eu',
  Be = 'be',
  Bs = 'bs',
  Br = 'br',
  Bg = 'bg',
  My = 'my',
  Ca = 'ca',
  Ce = 'ce',
  Zh = 'zh',
  ZhHans = 'zh_Hans',
  ZhHant = 'zh_Hant',
  Cu = 'cu',
  Kw = 'kw',
  Co = 'co',
  Hr = 'hr',
  Cs = 'cs',
  Da = 'da',
  Nl = 'nl',
  NlBe = 'nl_BE',
  Dz = 'dz',
  En = 'en',
  EnAu = 'en_AU',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnUs = 'en_US',
  Eo = 'eo',
  Et = 'et',
  Ee = 'ee',
  Fo = 'fo',
  Fi = 'fi',
  Fr = 'fr',
  FrCa = 'fr_CA',
  FrCh = 'fr_CH',
  Ff = 'ff',
  Gl = 'gl',
  Lg = 'lg',
  Ka = 'ka',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  El = 'el',
  Gu = 'gu',
  Ht = 'ht',
  Ha = 'ha',
  He = 'he',
  Hi = 'hi',
  Hu = 'hu',
  Is = 'is',
  Ig = 'ig',
  Id = 'id',
  Ia = 'ia',
  Ga = 'ga',
  It = 'it',
  Ja = 'ja',
  Jv = 'jv',
  Kl = 'kl',
  Kn = 'kn',
  Ks = 'ks',
  Kk = 'kk',
  Km = 'km',
  Ki = 'ki',
  Rw = 'rw',
  Ko = 'ko',
  Ku = 'ku',
  Ky = 'ky',
  Lo = 'lo',
  La = 'la',
  Lv = 'lv',
  Ln = 'ln',
  Lt = 'lt',
  Lu = 'lu',
  Lb = 'lb',
  Mk = 'mk',
  Mg = 'mg',
  Ms = 'ms',
  Ml = 'ml',
  Mt = 'mt',
  Gv = 'gv',
  Mi = 'mi',
  Mr = 'mr',
  Mn = 'mn',
  Ne = 'ne',
  Nd = 'nd',
  Se = 'se',
  Nb = 'nb',
  Nn = 'nn',
  Ny = 'ny',
  Or = 'or',
  Om = 'om',
  Os = 'os',
  Ps = 'ps',
  Fa = 'fa',
  FaAf = 'fa_AF',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_BR',
  PtPt = 'pt_PT',
  Pa = 'pa',
  Qu = 'qu',
  Ro = 'ro',
  RoMd = 'ro_MD',
  Rm = 'rm',
  Rn = 'rn',
  Ru = 'ru',
  Sm = 'sm',
  Sg = 'sg',
  Sa = 'sa',
  Gd = 'gd',
  Sr = 'sr',
  Sn = 'sn',
  Ii = 'ii',
  Sd = 'sd',
  Si = 'si',
  Sk = 'sk',
  Sl = 'sl',
  So = 'so',
  St = 'st',
  Es = 'es',
  EsEs = 'es_ES',
  EsMx = 'es_MX',
  Su = 'su',
  Sw = 'sw',
  SwCd = 'sw_CD',
  Sv = 'sv',
  Tg = 'tg',
  Ta = 'ta',
  Tt = 'tt',
  Te = 'te',
  Th = 'th',
  Bo = 'bo',
  Ti = 'ti',
  To = 'to',
  Tr = 'tr',
  Tk = 'tk',
  Uk = 'uk',
  Ur = 'ur',
  Ug = 'ug',
  Uz = 'uz',
  Vi = 'vi',
  Vo = 'vo',
  Cy = 'cy',
  Fy = 'fy',
  Wo = 'wo',
  Xh = 'xh',
  Yi = 'yi',
  Yo = 'yo',
  Zu = 'zu'
}

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  code: Scalars['String'];
  args: Array<ConfigArg>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  slug: Scalars['String'];
  breadcrumbs: Array<CollectionBreadcrumb>;
  position: Scalars['Int'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  parent?: Maybe<Collection>;
  children?: Maybe<Array<Collection>>;
  filters: Array<ConfigurableOperation>;
  translations: Array<CollectionTranslation>;
  productVariants: ProductVariantList;
};


export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type Facet = {
  __typename?: 'Facet';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  code: Scalars['String'];
  values: Array<FacetValue>;
  translations: Array<FacetTranslation>;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type FacetValue = {
  __typename?: 'FacetValue';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  facet: Facet;
  name: Scalars['String'];
  code: Scalars['String'];
  translations: Array<FacetValueTranslation>;
};

export type OrderList = {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderSortParameter = {
  __typename?: 'OrderSortParameter';
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  orderPlacedAt?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  totalQuantity?: Maybe<SortOrder>;
  subTotal?: Maybe<SortOrder>;
  subTotalWithTax?: Maybe<SortOrder>;
  shipping?: Maybe<SortOrder>;
  shippingWithTax?: Maybe<SortOrder>;
  total?: Maybe<SortOrder>;
  totalWithTax?: Maybe<SortOrder>;
};

export type IdOperators = {
  __typename?: 'IDOperators';
  eq?: Maybe<Scalars['String']>;
  notEq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type DateRange = {
  __typename?: 'DateRange';
  start: Scalars['String'];
  end: Scalars['String'];
};

export type DateOperators = {
  __typename?: 'DateOperators';
  eq?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  between?: Maybe<DateRange>;
};

export type StringOperators = {
  __typename?: 'StringOperators';
  eq?: Maybe<Scalars['String']>;
  notEq?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  regex?: Maybe<Scalars['String']>;
};

export type BooleanOperators = {
  __typename?: 'BooleanOperators';
  eq?: Maybe<Scalars['Boolean']>;
};

export type NumberRange = {
  __typename?: 'NumberRange';
  start: Scalars['Float'];
  end: Scalars['Float'];
};

export enum LogicalOperator {
  And = 'AND',
  Or = 'OR'
}

export type NumberOperators = {
  __typename?: 'NumberOperators';
  eq?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  between?: Maybe<NumberRange>;
};

export type OrderFilterParameter = {
  __typename?: 'OrderFilterParameter';
  id?: Maybe<IdOperators>;
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  orderPlacedAt?: Maybe<DateOperators>;
  code?: Maybe<StringOperators>;
  state?: Maybe<StringOperators>;
  active?: Maybe<BooleanOperators>;
  totalQuantity?: Maybe<NumberOperators>;
  subTotal?: Maybe<NumberOperators>;
  subTotalWithTax?: Maybe<NumberOperators>;
  currencyCode?: Maybe<StringOperators>;
  shipping?: Maybe<NumberOperators>;
  shippingWithTax?: Maybe<NumberOperators>;
  total?: Maybe<NumberOperators>;
  totalWithTax?: Maybe<NumberOperators>;
};

export type OrderListOptions = {
  __typename?: 'OrderListOptions';
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<OrderSortParameter>;
  filter?: Maybe<OrderFilterParameter>;
  filterOperator?: Maybe<LogicalOperator>;
};

export type CountryTranslation = {
  __typename?: 'CountryTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  translations: Array<CountryTranslation>;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country: Country;
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  code: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Permission>;
  channels: Array<Channel>;
};

export enum CurrencyCode {
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Stn = 'STN',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Ves = 'VES',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL'
}

export enum Permission {
  Authenticated = 'Authenticated',
  SuperAdmin = 'SuperAdmin',
  Owner = 'Owner',
  Public = 'Public',
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  CreateCatalog = 'CreateCatalog',
  ReadCatalog = 'ReadCatalog',
  UpdateCatalog = 'UpdateCatalog',
  DeleteCatalog = 'DeleteCatalog',
  CreateSettings = 'CreateSettings',
  ReadSettings = 'ReadSettings',
  UpdateSettings = 'UpdateSettings',
  DeleteSettings = 'DeleteSettings',
  CreateAdministrator = 'CreateAdministrator',
  ReadAdministrator = 'ReadAdministrator',
  UpdateAdministrator = 'UpdateAdministrator',
  DeleteAdministrator = 'DeleteAdministrator',
  CreateAsset = 'CreateAsset',
  ReadAsset = 'ReadAsset',
  UpdateAsset = 'UpdateAsset',
  DeleteAsset = 'DeleteAsset',
  CreateChannel = 'CreateChannel',
  ReadChannel = 'ReadChannel',
  UpdateChannel = 'UpdateChannel',
  DeleteChannel = 'DeleteChannel',
  CreateCollection = 'CreateCollection',
  ReadCollection = 'ReadCollection',
  UpdateCollection = 'UpdateCollection',
  DeleteCollection = 'DeleteCollection',
  CreateCountry = 'CreateCountry',
  ReadCountry = 'ReadCountry',
  UpdateCountry = 'UpdateCountry',
  DeleteCountry = 'DeleteCountry',
  CreateCustomer = 'CreateCustomer',
  ReadCustomer = 'ReadCustomer',
  UpdateCustomer = 'UpdateCustomer',
  DeleteCustomer = 'DeleteCustomer',
  CreateCustomerGroup = 'CreateCustomerGroup',
  ReadCustomerGroup = 'ReadCustomerGroup',
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  CreateFacet = 'CreateFacet',
  ReadFacet = 'ReadFacet',
  UpdateFacet = 'UpdateFacet',
  DeleteFacet = 'DeleteFacet',
  CreateOrder = 'CreateOrder',
  ReadOrder = 'ReadOrder',
  UpdateOrder = 'UpdateOrder',
  DeleteOrder = 'DeleteOrder',
  CreatePaymentMethod = 'CreatePaymentMethod',
  ReadPaymentMethod = 'ReadPaymentMethod',
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  DeletePaymentMethod = 'DeletePaymentMethod',
  CreateProduct = 'CreateProduct',
  ReadProduct = 'ReadProduct',
  UpdateProduct = 'UpdateProduct',
  DeleteProduct = 'DeleteProduct',
  CreatePromotion = 'CreatePromotion',
  ReadPromotion = 'ReadPromotion',
  UpdatePromotion = 'UpdatePromotion',
  DeletePromotion = 'DeletePromotion',
  CreateShippingMethod = 'CreateShippingMethod',
  ReadShippingMethod = 'ReadShippingMethod',
  UpdateShippingMethod = 'UpdateShippingMethod',
  DeleteShippingMethod = 'DeleteShippingMethod',
  CreateTag = 'CreateTag',
  ReadTag = 'ReadTag',
  UpdateTag = 'UpdateTag',
  DeleteTag = 'DeleteTag',
  CreateTaxCategory = 'CreateTaxCategory',
  ReadTaxCategory = 'ReadTaxCategory',
  UpdateTaxCategory = 'UpdateTaxCategory',
  DeleteTaxCategory = 'DeleteTaxCategory',
  CreateTaxRate = 'CreateTaxRate',
  ReadTaxRate = 'ReadTaxRate',
  UpdateTaxRate = 'UpdateTaxRate',
  DeleteTaxRate = 'DeleteTaxRate',
  CreateSystem = 'CreateSystem',
  ReadSystem = 'ReadSystem',
  UpdateSystem = 'UpdateSystem',
  DeleteSystem = 'DeleteSystem',
  CreateZone = 'CreateZone',
  ReadZone = 'ReadZone',
  UpdateZone = 'UpdateZone',
  DeleteZone = 'DeleteZone'
}

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type Zone = {
  __typename?: 'Zone';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  members: Array<Country>;
};

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  code: Scalars['String'];
  token: Scalars['String'];
  defaultTaxZone?: Maybe<Zone>;
  defaultShippingZone?: Maybe<Zone>;
  defaultLanguageCode: LanguageCode;
  currencyCode: CurrencyCode;
  pricesIncludeTax: Scalars['Boolean'];
};

export type AuthenticationMethod = {
  __typename?: 'AuthenticationMethod';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  strategy: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  identifier: Scalars['String'];
  verified: Scalars['Boolean'];
  roles: Array<Role>;
  lastLogin?: Maybe<Scalars['String']>;
  authenticationMethods: Array<AuthenticationMethod>;
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  addresses?: Maybe<Array<Address>>;
  orders: OrderList;
  user?: Maybe<User>;
};


export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export enum AssetType {
  Image = 'IMAGE',
  Video = 'VIDEO',
  Binary = 'BINARY'
}

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type ProductVariantSortParameter = {
  __typename?: 'ProductVariantSortParameter';
  id?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  sku?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  priceWithTax?: Maybe<SortOrder>;
  stockLevel?: Maybe<SortOrder>;
};

export type ProductVariantFilterParameter = {
  __typename?: 'ProductVariantFilterParameter';
  id?: Maybe<IdOperators>;
  productId?: Maybe<IdOperators>;
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  sku?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  price?: Maybe<NumberOperators>;
  currencyCode?: Maybe<StringOperators>;
  priceWithTax?: Maybe<NumberOperators>;
  stockLevel?: Maybe<StringOperators>;
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  groupId: Scalars['ID'];
  group: ProductOptionGroup;
  translations: Array<ProductOptionTranslation>;
};

export type CustomerFilterParameter = {
  __typename?: 'CustomerFilterParameter';
  id?: Maybe<IdOperators>;
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  title?: Maybe<StringOperators>;
  firstName?: Maybe<StringOperators>;
  lastName?: Maybe<StringOperators>;
  phoneNumber?: Maybe<StringOperators>;
  emailAddress?: Maybe<StringOperators>;
};

export type CustomerSortParameter = {
  __typename?: 'CustomerSortParameter';
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
  emailAddress?: Maybe<SortOrder>;
};

export type CustomerListOptions = {
  __typename?: 'CustomerListOptions';
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<CustomerSortParameter>;
  filter?: Maybe<CustomerFilterParameter>;
  filterOperator?: Maybe<LogicalOperator>;
};

export type CustomerList = {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};

export type CustomerGroup = {
  __typename?: 'CustomerGroup';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  customers: CustomerList;
};


export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type TaxCategory = {
  __typename?: 'TaxCategory';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  isDefault: Scalars['Boolean'];
};

export type TaxRate = {
  __typename?: 'TaxRate';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  value: Scalars['Float'];
  category: TaxCategory;
  zone: Zone;
  customerGroup?: Maybe<CustomerGroup>;
};

export type ProductOptionGroup = {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
};

export type ProductVariantListOptions = {
  __typename?: 'ProductVariantListOptions';
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductVariantSortParameter>;
  filter?: Maybe<ProductVariantFilterParameter>;
  filterOperator?: Maybe<LogicalOperator>;
};

export type ProductVariantList = {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};

export type Asset = {
  __typename?: 'Asset';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  type: AssetType;
  fileSize: Scalars['Int'];
  mimeType: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  source: Scalars['String'];
  preview: Scalars['String'];
  focalPoint?: Maybe<Coordinate>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  variants: Array<ProductVariant>;
  variantList: ProductVariantList;
  optionGroups: Array<ProductOptionGroup>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductTranslation>;
  collections: Array<Collection>;
};


export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  id: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  sku: Scalars['String'];
  name: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  price: Scalars['Int'];
  currencyCode: CurrencyCode;
  priceWithTax: Scalars['Int'];
  stockLevel: Scalars['String'];
  taxRateApplied: TaxRate;
  taxCategory: TaxCategory;
  options: Array<ProductOption>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductVariantTranslation>;
};

export enum AdjustmentType {
  Promotion = 'PROMOTION',
  DistributedOrderPromotion = 'DISTRIBUTED_ORDER_PROMOTION',
  Other = 'OTHER'
}

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String'];
  type: AdjustmentType;
  description: Scalars['String'];
  amount: Scalars['Int'];
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type Refund = {
  __typename?: 'Refund';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  items: Scalars['Int'];
  shipping: Scalars['Int'];
  adjustment: Scalars['Int'];
  total: Scalars['Int'];
  method?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  paymentId: Scalars['ID'];
};

export type Payment = {
  __typename?: 'Payment';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  method: Scalars['String'];
  amount: Scalars['Int'];
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  refunds: Array<Refund>;
};

export type Promotion = {
  __typename?: 'Promotion';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  startsAt?: Maybe<Scalars['String']>;
  endsAt?: Maybe<Scalars['String']>;
  couponCode?: Maybe<Scalars['String']>;
  perCustomerUsageLimit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  conditions: Array<ConfigurableOperation>;
  actions: Array<ConfigurableOperation>;
};

export type Administrator = {
  __typename?: 'Administrator';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  emailAddress: Scalars['String'];
  user: User;
};

export enum HistoryEntryType {
  CustomerRegistered = 'CUSTOMER_REGISTERED',
  CustomerVerified = 'CUSTOMER_VERIFIED',
  CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
  CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
  CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
  CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
  CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
  CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
  CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
  CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CustomerNote = 'CUSTOMER_NOTE',
  OrderStateTransition = 'ORDER_STATE_TRANSITION',
  OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
  OrderFulfillment = 'ORDER_FULFILLMENT',
  OrderCancellation = 'ORDER_CANCELLATION',
  OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
  OrderFulfillmentTransition = 'ORDER_FULFILLMENT_TRANSITION',
  OrderNote = 'ORDER_NOTE',
  OrderCouponApplied = 'ORDER_COUPON_APPLIED',
  OrderCouponRemoved = 'ORDER_COUPON_REMOVED',
  OrderModified = 'ORDER_MODIFIED'
}

export type HistoryEntrySortParameter = {
  __typename?: 'HistoryEntrySortParameter';
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type HistoryEntryFilterParameter = {
  __typename?: 'HistoryEntryFilterParameter';
  id?: Maybe<IdOperators>;
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  type?: Maybe<StringOperators>;
};

export type HistoryEntryListOptions = {
  __typename?: 'HistoryEntryListOptions';
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<HistoryEntrySortParameter>;
  filter?: Maybe<HistoryEntryFilterParameter>;
  filterOperator?: Maybe<LogicalOperator>;
};

export type HistoryEntry = {
  __typename?: 'HistoryEntry';
  isPublic: Scalars['Boolean'];
  administrator?: Maybe<Administrator>;
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  type: HistoryEntryType;
  data: Scalars['JSON'];
};

export type HistoryEntryList = {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};

export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  description: Scalars['String'];
  taxRate: Scalars['Float'];
  taxBase: Scalars['Int'];
  taxTotal: Scalars['Int'];
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  code: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  fulfillmentHandlerCode: Scalars['String'];
  checker: ConfigurableOperation;
  calculator: ConfigurableOperation;
  translations: Array<ShippingMethodTranslation>;
};

export type ShippingLine = {
  __typename?: 'ShippingLine';
  shippingMethod: ShippingMethod;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  discountedPrice: Scalars['Int'];
  discountedPriceWithTax: Scalars['Int'];
  discounts: Array<Discount>;
};

export type Surcharge = {
  __typename?: 'Surcharge';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  description: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  taxLines: Array<TaxLine>;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  taxRate: Scalars['Float'];
};

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String'];
  type: AdjustmentType;
  description: Scalars['String'];
  amount: Scalars['Int'];
  amountWithTax: Scalars['Int'];
};

export type Fulfillment = {
  __typename?: 'Fulfillment';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  orderItems: Array<OrderItem>;
  state: Scalars['String'];
  method: Scalars['String'];
  trackingCode?: Maybe<Scalars['String']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  cancelled: Scalars['Boolean'];
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  discountedUnitPrice: Scalars['Int'];
  discountedUnitPriceWithTax: Scalars['Int'];
  proratedUnitPrice: Scalars['Int'];
  proratedUnitPriceWithTax: Scalars['Int'];
  unitTax: Scalars['Int'];
  taxRate: Scalars['Float'];
  adjustments: Array<Adjustment>;
  taxLines: Array<TaxLine>;
  fulfillment?: Maybe<Fulfillment>;
  refundId?: Maybe<Scalars['ID']>;
};

export type OrderLine = {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  productVariant: ProductVariant;
  featuredAsset?: Maybe<Asset>;
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  unitPriceChangeSinceAdded: Scalars['Int'];
  unitPriceWithTaxChangeSinceAdded: Scalars['Int'];
  discountedUnitPrice: Scalars['Int'];
  discountedUnitPriceWithTax: Scalars['Int'];
  proratedUnitPrice: Scalars['Int'];
  proratedUnitPriceWithTax: Scalars['Int'];
  quantity: Scalars['Int'];
  items: Array<OrderItem>;
  taxRate: Scalars['Float'];
  linePrice: Scalars['Int'];
  linePriceWithTax: Scalars['Int'];
  discountedLinePrice: Scalars['Int'];
  discountedLinePriceWithTax: Scalars['Int'];
  proratedLinePrice: Scalars['Int'];
  proratedLinePriceWithTax: Scalars['Int'];
  lineTax: Scalars['Int'];
  discounts: Array<Discount>;
  taxLines: Array<TaxLine>;
  order: Order;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};


export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export enum ErrorCode {
  UnknownError = 'UNKNOWN_ERROR',
  NativeAuthStrategyError = 'NATIVE_AUTH_STRATEGY_ERROR',
  InvalidCredentialsError = 'INVALID_CREDENTIALS_ERROR',
  OrderStateTransitionError = 'ORDER_STATE_TRANSITION_ERROR',
  EmailAddressConflictError = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  OrderLimitError = 'ORDER_LIMIT_ERROR',
  NegativeQuantityError = 'NEGATIVE_QUANTITY_ERROR',
  InsufficientStockError = 'INSUFFICIENT_STOCK_ERROR',
  CouponCodeInvalidError = 'COUPON_CODE_INVALID_ERROR',
  CouponCodeExpiredError = 'COUPON_CODE_EXPIRED_ERROR',
  CouponCodeLimitError = 'COUPON_CODE_LIMIT_ERROR',
  OrderModificationError = 'ORDER_MODIFICATION_ERROR',
  IneligibleShippingMethodError = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  OrderPaymentStateError = 'ORDER_PAYMENT_STATE_ERROR',
  IneligiblePaymentMethodError = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
  PaymentFailedError = 'PAYMENT_FAILED_ERROR',
  PaymentDeclinedError = 'PAYMENT_DECLINED_ERROR',
  AlreadyLoggedInError = 'ALREADY_LOGGED_IN_ERROR',
  MissingPasswordError = 'MISSING_PASSWORD_ERROR',
  PasswordValidationError = 'PASSWORD_VALIDATION_ERROR',
  PasswordAlreadySetError = 'PASSWORD_ALREADY_SET_ERROR',
  VerificationTokenInvalidError = 'VERIFICATION_TOKEN_INVALID_ERROR',
  VerificationTokenExpiredError = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  IdentifierChangeTokenInvalidError = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  IdentifierChangeTokenExpiredError = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  PasswordResetTokenInvalidError = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PasswordResetTokenExpiredError = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  NotVerifiedError = 'NOT_VERIFIED_ERROR',
  NoActiveOrderError = 'NO_ACTIVE_ORDER_ERROR'
}

export type UpdateOrderItemsResult = Order | OrderModificationError | OrderLimitError | NegativeQuantityError | InsufficientStockError;

export type OrderModificationError = {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export const ORDER_MODIFICATION_ERROR_FRAGMENT = gql`
  fragment orderModificationErrorFragment on OrderModificationError {
    errorCode
    message
  }
`

export type OrderLimitError = {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  maxItems: Scalars['Int'];
};

export const ORDER_LIMIT_ERROR_FRAGMENT = gql`
  fragment orderLimitErrorFragment on OrderLimitError {
    errorCode
    message
  }
`

export type NegativeQuantityError = {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export const NEGATIVE_QUANTITY_ERROR_FRAGMENT = gql`
  fragment negativeQuantityErrorFragment on NegativeQuantityError {
    errorCode
    message
  }
`

export type InsufficientStockError = {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  quantityAvailable: Scalars['Int'];
  order: Order;
};

export const INSUFFICIENT_STOCK_ERROR_FRAGMENT = gql`
  fragment insufficientStockErrorFragment on InsufficientStockError {
    errorCode
    message
    quantityAvailable
    order{
      id
    }
  }
`
export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  orderPlacedAt?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  state: Scalars['String'];
  active: Scalars['Boolean'];
  customer?: Maybe<Customer>;
  shippingAddress?: Maybe<OrderAddress>;
  billingAddress?: Maybe<OrderAddress>;
  lines: Array<OrderLine>;
  surcharges: Array<Surcharge>;
  discounts: Array<Discount>;
  couponCodes: Array<Scalars['String']>;
  promotions: Array<Promotion>;
  payments?: Maybe<Array<Payment>>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  totalQuantity: Scalars['Int'];
  subTotal: Scalars['Int'];
  subTotalWithTax: Scalars['Int'];
  currencyCode: CurrencyCode;
  shippingLines: Array<ShippingLine>;
  shipping: Scalars['Int'];
  shippingWithTax: Scalars['Int'];
  total: Scalars['Int'];
  totalWithTax: Scalars['Int'];
  taxSummary: Array<OrderTaxSummary>;
  history: HistoryEntryList;
};

export const ORDER_FRAGMENT = gql`
  fragment orderFragment on Order {
    id
    createdAt
    updatedAt
    orderPlacedAt
    code
    state
    active
    customer {
    id
    }
    shippingAddress{
      fullName
    }
    billingAddress{
      fullName
    }
    lines{
      id
    }
    surcharges{
      id
    }
    discounts{
      type
    }
    couponCodes
    promotions{
      id
    }
    payments{
      id
    }
    fulfillments{
      id
    }
    totalQuantity
    subTotal
    subTotalWithTax
    currencyCode
    shippingLines{
      shippingMethod{
        id
      }
      price
      priceWithTax
      discountedPrice
      discountedPriceWithTax
      discounts{
        type
        description
      }
    }
    shipping
    shippingWithTax
    total
    totalWithTax
    taxSummary{
      description
      taxRate
      taxBase
      taxTotal
    }
    history{
      items{
        id
      }
      totalItems
    }
  }
`
