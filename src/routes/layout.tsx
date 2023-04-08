import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { fetchBuilder, MemoryCache } from 'node-fetch-cache';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

const aWeekInMs = 604800000;
const fetch = fetchBuilder.withCache(new MemoryCache({ ttl: aWeekInMs }));

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
  const res = await fetch(fourFutureUrl);
  const posts = (await res.json()) as PostItem[];
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
