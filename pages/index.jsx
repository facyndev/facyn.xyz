import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';
import { FaYoutube, FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
      <Layout>
          <div className={styles.presentation}>
            <div className={styles.presentationAboutMe}>
              <div>
                <h1 className={styles.title}>Facyn</h1>
                <h2 className={styles.subTitle}><strong>Web Deve</strong><strong>loper</strong></h2>
              </div>
              <div>
                <p>Mi nombre es <b>Facundo</b>, actualmente me especializo en <b>Frontend</b> y estoy estudiando el <b>Backend</b>.</p>
              </div>
              <div className={styles.social}>
                <div>
                <a className={styles.link} href="/youtube" target="_blank"><FaYoutube /></a>
                <strong>&bull;</strong>
                <a className={styles.link} href="/instagram" target="_blank"><FaInstagram /></a>
                <strong>&bull;</strong>
                <a className={styles.link} href="/discord" target="_blank"><FaDiscord /></a>
                <strong>&bull;</strong>
                <a className={styles.link} href="/github" target="_blank"><FaGithub /></a>
                </div>
                <div className={styles.line}></div>
                <a className={styles.button} href="/contacto" target="_blank">Contactar</a>
              </div>
            </div>
            <img src="/facyn.ico" alt="Facyn Logo" />
          </div>
      </Layout>
  )
}
