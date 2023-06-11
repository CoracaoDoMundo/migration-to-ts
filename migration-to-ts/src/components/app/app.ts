import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataNews, DataSources } from '../types/index';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: DataNews) => this.view.drawNews(data)));
        this.controller.getSources((data: DataSources) => this.view.drawSources(data));
    }
}

export default App;
