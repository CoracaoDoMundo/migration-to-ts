type Status = 'ok' | 'error';

type Category = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';

type Language = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';

type Country =
  | 'ae'
  | 'ar'
  | 'at'
  | 'au'
  | 'be'
  | 'bg'
  | 'br'
  | 'ca'
  | 'ch'
  | 'cn'
  | 'co'
  | 'cu'
  | 'cz'
  | 'de'
  | 'eg'
  | 'fr'
  | 'gb'
  | 'gr'
  | 'hk'
  | 'hu'
  | 'id'
  | 'ie'
  | 'il'
  | 'in'
  | 'it'
  | 'jp'
  | 'kr'
  | 'lt'
  | 'lv'
  | 'ma'
  | 'mx'
  | 'my'
  | 'ng'
  | 'nl'
  | 'no'
  | 'nz'
  | 'ph'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'rs'
  | 'ru'
  | 'sa'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'th'
  | 'tr'
  | 'tw'
  | 'ua'
  | 'us'
  | 've'
  | 'za';

type SourceId = { id: string; name: string };

type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  language: Language;
  country: Country;
};

export type DataNews = {
  status: string,
  totalResults: number,
  articles: {
    author?: string,
    content?: string,
    description?: string,
    publishedAt?: string,
    source?: SourceId,
    title?: string,
    url?: string,
    urlToImage?: string,
  }[],
};

export type DataSources = {
  status: string,
  sources: Source,
};

export interface Response {
  status: Status;
  sources: Source[];
}

export interface Request {
  apiKey: string;
  category?: Category;
  language?: Language;
  country?: Country;
}