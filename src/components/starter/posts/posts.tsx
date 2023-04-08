import { component$ } from '@builder.io/qwik';
import { JSDOM } from 'jsdom';
import styles from './posts.module.css';
import { usePostsLoader } from '~/routes/layout';

// export const list: PostItem[] = [
//   {
//     title: "Você deveria se importar com design!",
//     date: new Date(2023, 2, 12).toLocaleDateString('pt-br', { dateStyle: 'long' }),
//     content: "Quando preciso me envolver com os frontenders, uma pergunta sempre vem a tona. Como tornar o design dessa tela mais funcional, mais agradável?",
//     link: "https://4future.com.br/index.php/2023/03/12/por-que-voce-deveria-se-importar-com-design/"
//   },
//   {
//     title: "LAB - Armazenando enums como texto",
//     date: new Date(2022, 10, 27).toLocaleDateString('pt-br', { dateStyle: 'long' }),
//     content: "Particularmente, gosto bastante de trabalhar com enumeradores. Nada melhor que o auto-complete falando exatamente os valores possíveis para determinada propriedade.",
//     link: "https://4future.com.br/index.php/2022/11/27/lab-armazenando-enums-como-texto/"
//   },
// ];

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