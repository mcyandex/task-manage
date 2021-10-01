import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import { NavItems } from 'types';
import NavigationDrawer from 'components/NavigationDrawer';

const navItems: NavItems = [
  { title: 'Why logoipsum', href: '/' },
  { title: 'Logoipsum features', href: '/features' },
  { title: 'Contact', href: '/contact' },
  { title: 'Sign up', href: '/sign-up', outlined: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  const standaloneMarkup = <Component {...pageProps} />;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <GlobalStyle />
      <NavigationDrawer items={navItems}>
        <Navbar items={navItems} />
      </NavigationDrawer>
      {/* <NavigationDrawer items={navItems}> */}
      {/* <Navbar items={navItems} /> */}
      {/* </NavigationDrawer> */}
      {standaloneMarkup}
    </>
  );
}

export default MyApp;
