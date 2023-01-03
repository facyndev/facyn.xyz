import Head from 'next/head';
import React, { Fragment, useEffect } from 'react';
import styles from '../styles/all.module.css';

export function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <meta name="title" content="Facyn" />
        <meta name="description" content="Articulos de tu preferencia, guías, diseños y demás sobre el desarrollo web." />
        <meta name="keywords" content="blog, blogpost, portafolio, aboutme, posts, blogs, guias, desarrollo web, web, html, js, css, javascript" />
        <meta name="sitedomain" content="facyn.xyz" />
        <meta name="designer" content="Facyn" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="15days" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Facyn" />
        <meta name="copyright" content="© 2022 Facyn" />
        <meta name="theme-color" content="#223581" data-react-helmet="true" />
        <meta name="apple-mobile-web-app-title" content="Facyn" />
        <meta name="application-name" content="Facyn" />
        <meta property="og:title" content="Facyn" />
        <meta property="og:description" content="Articulos de tu preferencia, guías, diseños y demás sobre el desarrollo web." />
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

      <nav className={styles.pageNavegation}>
        <a href="/">
          <img className={styles.pageLogo} src="/facyn.ico" alt="Facyn Logo" />
        </a>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/proyectos">Proyectos</a></li>
          <li><a href="/posts">Blog</a></li>
        </ul>
      </nav>

      <div className={styles.pageContent}>

        <main>{children}</main>

        <footer className={styles.pageFooter}>
          <span>Copyright &copy; 2022 - Facyn</span>
          <ul>
            <li><a href="/politicadeprivacidad" target="_blank">Privacidad</a></li>
            <span>&bull;</span>
            <li><a href="/politicadecookies" target="_blank">Cookies</a></li>
            <span>&bull;</span>
            <li><a href="/social/discord" target="_blank">Soporte</a></li>
          </ul>
        </footer>
      </div>
    </Fragment>
  )
}
