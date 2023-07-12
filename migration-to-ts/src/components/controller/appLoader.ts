import Loader from './loader';

abstract class AppLoader extends Loader {
  constructor() {
    super('https://news-proxy.spanb4.shop/', {
      apiKey: 'dea2647f6bd441ecaa6fc9eeda9bf47d',
    });
  }
}

export default AppLoader;
