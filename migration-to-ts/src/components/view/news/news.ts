import './news.css';
import newsPic from '../img/news-pic.jpg';
import { Article } from '../../types/index';

class News {
  public draw(data: Article[]) {
    const news: Article[] = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp')!;

    news.forEach((item: Article, idx: number) => {
      const newsClone: HTMLElement = <HTMLElement>newsItemTemp.content.cloneNode(true);
      const newsItem: HTMLDivElement = newsClone.querySelector('.news__item')!;

      if (idx % 2) newsItem.classList.add('alt');

      const metaPhoto: HTMLDivElement = newsClone.querySelector('.news__meta-photo')!;
      metaPhoto.style.backgroundImage = `url(${item.urlToImage || newsPic})`;
      const metaAuthor: HTMLLIElement = newsClone.querySelector('.news__meta-author')!;
      if (item.source) {
        metaAuthor.textContent = item.author ? item.author : item.source.name;
      }
      const metaDate: HTMLLIElement = newsClone.querySelector('.news__meta-date')!;
      if (item.publishedAt) {
        metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      }
      const newsDescriptionTitle: HTMLHeadingElement = newsClone.querySelector('.news__description-title')!;
      newsDescriptionTitle.textContent = item.title;
      const newsDescriptionSource: HTMLHeadingElement = newsClone.querySelector('.news__description-source')!;
      newsDescriptionSource.textContent = item.source.name;
      const newsDescriptionContent: HTMLParagraphElement = newsClone.querySelector('.news__description-content')!;
      newsDescriptionContent.textContent = item.description;
      const newsMoreInfo: HTMLAnchorElement = newsClone.querySelector('.news__read-more a')!;
      newsMoreInfo.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    document.querySelector('.news')!.innerHTML = '';
    document.querySelector('.news')!.appendChild(fragment);
  }
}

export default News;
