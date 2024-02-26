import { Article } from '../../../types/index';
import './news.css';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        if (newsItemTemp === null) {
            throw new Error('newsItemTemp is null');
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLLIElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLLIElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLHeadingElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLHeadingElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLParagraphElement).textContent =
                item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLLinkElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsElement = document.querySelector('.news') as HTMLDivElement;
        newsElement.innerHTML = '';
        newsElement.appendChild(fragment);
    }
}

export default News;
