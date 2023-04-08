import { component$ } from '@builder.io/qwik';
import { DiscordLogo, GithubLogo, InstagramLogo, LinkedInLogo, TwitterLogo, YoutubeLogo } from '../icons/social';
import styles from './social.module.css';

interface SocialItem {
  link: string;
  title: string;
  icon: any;
}

export const list: SocialItem[] = [
  { title: "Twitter", link: "https://twitter.com/Filipe_Quatoo", icon: TwitterLogo },
  { title: "Discord", link: "https://discordapp.com/channels/@me/Quatoo#3397/", icon: DiscordLogo },
  { title: "Instagram", link: "https://www.instagram.com/quatoo", icon: InstagramLogo },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/filipe-borges-b1075518/", icon: LinkedInLogo },
  { title: "Github", link: "https://github.com/quatoo", icon: GithubLogo },
  { title: "Youtube", link: "https://www.youtube.com/@quatoo1", icon: YoutubeLogo }
];


export default component$(() => {
  return (
    <div class={styles.container}>
      {list.map((item, index) => (
        <div key={`items-${index}`} class={styles.socialItem}>
            <a href={item.link} title={item.title} target="_blank">
              {item.icon}
            </a>
        </div>
      ))}
    </div>
  );
});