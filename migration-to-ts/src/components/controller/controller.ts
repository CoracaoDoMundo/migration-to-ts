import AppLoader from './appLoader';
import { DataCallback, SourcesCallback } from '../types/index';

class AppController extends AppLoader {
  public getSources(callback: SourcesCallback) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    );
  }

  public getNews(e: Event, callback: DataCallback) {
    let target: HTMLDivElement | HTMLSpanElement = <HTMLElement>e.target;
    let newsContainer: HTMLDivElement | null = null;
    if (e.currentTarget instanceof HTMLDivElement) {
      newsContainer = e.currentTarget;
    }

    while (target !== newsContainer) {
      if (target && target.classList.contains('source__item')) {
        const sourceId: string = target.getAttribute('data-source-id')!;
        if (newsContainer && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
        target = target.parentNode as HTMLDivElement;
        let container: HTMLDivElement | null = null;
        if (newsContainer!.closest('.sources') instanceof HTMLDivElement) {
          container = newsContainer!.closest('.sources');
        }
        container!.style.height = '140px';        
    }
  }
}

export default AppController;
