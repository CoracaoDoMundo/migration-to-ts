type Options = { [apiKey: string]: string };
type RespOptions = { endpoint: string; options?: Options };
type RespCallback = () => void;

abstract class Loader {
  private baseLink: string;
  private options: Options;

  constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: RespOptions,
    callback: RespCallback = () => {
      console.error('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Options, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url: string = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string = 'GET', endpoint: string, callback: Function, options: Options) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;