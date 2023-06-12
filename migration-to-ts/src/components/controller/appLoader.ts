import Loader from './loader';

abstract class AppLoader extends Loader {
  constructor() {
    super(/*'https://news-proxy.spanb4.shop/'*/'http://127.0.0.1:8075/', {
      apiKey: 'dea2647f6bd441ecaa6fc9eeda9bf47d', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
