import { Source } from '../../../types';
import './sources.css';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            if (sourceClone === null) {
                throw new Error('sourceClone is null');
            }

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLDivElement;
        sources.append(fragment);

        const buttonMore = document.querySelector('.button-more') as HTMLButtonElement;
        buttonMore.addEventListener('click', () => sources.classList.toggle('collapse'));
    }
}

export default Sources;
