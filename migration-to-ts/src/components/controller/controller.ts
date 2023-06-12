import AppLoader from './appLoader';
import { DataCallback, SourcesCallback } from '../types/index';

class AppController extends AppLoader {
    public getSources(callback: SourcesCallback) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e/*: Event*/, callback: DataCallback) {
        let target = e.target;
        // console.log('target:', target);
        const newsContainer = e.currentTarget;
        // console.log('newsContainer:', newsContainer)

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
