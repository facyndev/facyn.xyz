import Head from 'next/head';
import React, { Fragment, useEffect } from 'react';
import styles from '../styles/all.module.css';

export function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <meta name="title" content="Facyn" />
        <meta name="description" content="Portafolio Personal." />
        <meta name="keywords" content="blog, blogpost, portafolio, aboutme, posts, blogs, guias, desarrollo web, web, html, js, css, javascript, dev, developer, desarrollador" />
        <meta name="sitedomain" content="facyn.xyz" />
        <meta name="designer" content="Facyn" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="15days" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Facyn" />
        <meta name="copyright" content="© 2022 Facyn" />
        <meta name="theme-color" content="#007aff" data-react-helmet="true" />
        <meta name="apple-mobile-web-app-title" content="Facyn" />
        <meta name="application-name" content="Facyn" />
        <meta property="og:title" content="Facyn" />
        <meta property="og:description" content="Portafolio Personal." />
        <meta property="og:url" content="https://facyn.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content="https://facyn.xyz/facyn.ico" />
        <meta property="og:site_name" content="Facyn" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@facyn" />
        <meta name="twitter:domain" content="facyn.xyz" />
        <meta name="twitter:image" content="https://facyn.xyz/facyn.ico" />
        <meta name="twitter:site" content="Facyn"/ >
        <link rel="icon" href="/facyn.ico" />
      </Head>

      <nav className={styles.navegation}>
        <div className={styles.navegationWrapper}>
        <a href="/">
          <img src="/facyn.ico" alt="Facyn Logo" />
          <strong>Facyn</strong>
        </a>
        <ul>
          <li><a href="/">Inicio</a></li>
        </ul>
        </div>
      </nav>

      <div className={styles.pageWrapper}>

        <main className={styles.body}>{children}</main>

      </div>
    </Fragment>
  )
}
