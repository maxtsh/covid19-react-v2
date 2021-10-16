export interface Country{
  ID: string,
  Country: string,
  CountryCode: string,
  Slug: string,
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: Number,
  NewRecovered: number,
  TotalRecovered: number,
  Date: string,
  Premium: unknown,
}

export interface Global {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
  Date: string,
}

export interface SummaryData{
  ID: string,
  Message: string,
  Global: Global,
  Countries: Country[],
  Date: string,
}

export interface Summary{
  error: string | boolean,
  loading: boolean,
  data: SummaryData,
}