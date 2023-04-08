import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" title="home">
          filipe borges          
        </a>
      </div>
      <ul>
        {/* <li>
          <a href="#">
            Sobre
          </a>
        </li> */}
        <li>
          <a href="https://4future.com.br/" target="_blank">
            4Future
          </a>
        </li>
        <li>
          <a href="https://bnpsolucoes.com.br/" target="_blank">
            BNP
          </a>
        </li>
      </ul>
    </header>
  );
});
