type Status = 'ok' | 'error';

enum Category {
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
}

enum Language {
  'ar',
  'de',
  'en',
  'es',
  'fr',
  'he',
  'it',
  'nl',
  'no',
  'pt',
  'ru',
  'sv',
  'ud',
  'zh',
}

enum Country {
  'ae',
  'ar',
  'at',
  'au',
  'be',
  'bg',
  'br',
  'ca',
  'ch',
  'cn',
  'co',
  'cu',
  'cz',
  'de',
  'eg',
  'fr',
  'gb',
  'gr',
  'hk',
  'hu',
  'id',
  'ie',
  'il',
  'in',
  'it',
  'jp',
  'kr',
  'lt',
  'lv',
  'ma',
  'mx',
  'my',
  'ng',
  'nl',
  'no',
  'nz',
  'ph',
  'pl',
  'pt',
  'ro',
  'rs',
  'ru',
  'sa',
  'se',
  'sg',
  'si',
  'sk',
  'th',
  'tr',
  'tw',
  'ua',
  'us',
  've',
  'za',
}

type SourceId = { id: string; name: string };

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  language: Language;
  country: Country;
}

export type DataCallback = (data: DataNews) => void;

export type SourcesCallback = (data: DataSources) => void;

export type Options = { [apiKey: string]: string };

export interface RespOptions {
  endpoint: string;
  options?: Options;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: SourceId;
  title: string;
  url: string;
  urlToImage: string;
}

export interface DataNews {
  status: string;
  totalResults: number;
  articles: Article[] | [];
}

export interface DataDraw {
  category: Category;
  country: Country;
  description: string;
  id: string;
  language: Language;
  name: string;
  url: string;
}

export interface DataSources {
  status: string;
  sources: DataDraw[];
}

export interface Response {
  status: Status;
  sources: Source[];
}
