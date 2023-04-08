import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class={styles.footer}>
      © {serverTime.value.date} Filipe Borges. Todos os direitos reservados.
    </footer>
  );
});
