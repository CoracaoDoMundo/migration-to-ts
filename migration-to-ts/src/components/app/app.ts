import AppController from '../controller/controller';
import Filter from '../view/filter/filter';
import { AppView } from '../view/appView';
import { DataNews, DataSources } from '../types/index';

class App {
  private controller: AppController;
  private view: AppView;
  private filter: Filter;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.filter = new Filter();
  }

  public start() {
    document
      .querySelector('.sources')!
      .addEventListener('click', (e: Event) =>
        this.controller.getNews(e, (data: DataNews) => this.view.drawNews(data)),
      );
    this.controller.getSources((data: DataSources) => this.view.drawSources(data));
    this.trackInputValue();
  }

  public trackInputValue() {
    let input: HTMLInputElement = document.querySelector('.sources-filter')!;
    input.addEventListener('blur', (event: Event) => this.filter.readFilterInfo(event, input));

    input.addEventListener('keydown', (event: Event) => {
      if (event instanceof KeyboardEvent && event.key === 'Enter' && event.target instanceof HTMLInputElement) {
        event.target!.blur();
      }
    });
  }
}

export default App;
