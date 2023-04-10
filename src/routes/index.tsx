import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Social from '~/components/starter/social/social';
import styles from './index.module.css';
import Posts from '~/components/starter/posts/posts';

// import Counter from '~/components/starter/counter/counter';


export default component$(() => {
  return (
    <div class="container">
      <div class="section">
        <div class={styles.presentation}>
          <img class={styles.avatar} src="/img/me/512.webp"/>

          <div class={styles.helloContainer}>
            <div class={styles.helloText}>
              <h1>
                <span>Oi, Eu sou Filipe.</span> Coordenador de desenvolvimento e engenheiro DevOps na BNP Soluções em TI.
              </h1>
            </div>

            <Social/>
          </div>
        </div>
      </div>

      <div class="section">
        <Posts/>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Hey there! Im Filipe',
  meta: [
    {
      name: 'description',
      content: 'This is my personal site to group everything about my professional journey',
    },
  ],
  links: [
    { href: '/fonts/Multicolore.otf', rel: 'stylesheet', type: 'font/otf' },
    { href: '/fonts/Hero-New-Regular.otf', rel: 'stylesheet', type: 'font/otf' },
    { href: '/fonts/Consolas.otf', rel: 'stylesheet', type: 'font/ttf' },
  ]
};
