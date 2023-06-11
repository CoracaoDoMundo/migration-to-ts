import './sources.css';
import { DataDraw } from '../../types/index';

class Sources {
  draw(data: DataDraw[]) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;

    data.forEach((item: DataDraw) => {
      const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

      sourceClone.querySelector('.source__item-name')!.textContent = item.name;
      sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')!.append(fragment);
  }
}

export default Sources;
