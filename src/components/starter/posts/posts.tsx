import { component$ } from '@builder.io/qwik';
import { JSDOM } from 'jsdom';
import styles from './posts.module.css';
import { usePostsLoader } from '~/routes/layout';


function normalizeExcerpt(excerpt: string) {
  const DOM = new JSDOM(excerpt, { contentType: 'text/html' });

  const paragraph = DOM.window.document.body.querySelector('p');
  const readMore = paragraph!.querySelector('a');
  readMore?.remove();

  return paragraph!.textContent || paragraph!.innerText;
}

function transformDate(date: string) {
  const realDate = new Date(date);
  return realDate.toLocaleDateString('pt-br', { dateStyle: 'long' });
}

export default component$(() => {
  const signal = usePostsLoader();

  return (
    <div class={styles.posts}>
      <h3>Posts Recentes</h3>

      {signal.value.map((item, index) => (
        <div key={`item-${index}`} class={styles.postItem}>
          <h2 dangerouslySetInnerHTML={item.title.rendered}></h2>
          <small>{transformDate(item.date)}</small>
          <p>{normalizeExcerpt(item.excerpt.rendered)} ...</p>

          <a href={item.link} title={item.title.rendered} target="_blank">
            Continue lendo
          </a>
        </div>
      ))}
    </div>
  );
});