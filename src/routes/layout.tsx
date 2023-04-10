import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
// import NodeCache from 'node-cache';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

// const aWeekInMs = 604800000;
// const aHourInSeconds = 3600;

// const cache = new NodeCache( { stdTTL: aWeekInMs, checkperiod: aHourInSeconds } );

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toLocaleDateString('pt-br', { year: 'numeric' }),
  };
});

const fourFutureUrl = "https://4future.com.br/wp-json/wp/v2/posts?author=9";

interface PostItem {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  excerpt: {
    rendered: string;
  };
  link: string;
}

export const usePostsLoader = routeLoader$(async () => {
  // let posts = cache.get("fourFuture") as PostItem[];
  
  // if (posts == undefined) {
    const res = await fetch(fourFutureUrl);
    const posts = (await res.json()) as PostItem[];
    // cache.set("fourFuture", posts);
  //}

  return posts;
});

export default component$(() => {
  return (
    <div class="page">
      <main>
        <Header />
        <Slot />
      </main>
      <div class="section">
        <div class="container">
          <Footer />
        </div>
      </div>
    </div>
  );
});
