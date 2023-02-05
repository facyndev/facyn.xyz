import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';

export default function Notfound() {
  return (
        <Layout>
            <div className={styles.pageNotfound}>
                <h1>404</h1>
                <h3>Oopss... No se ha encontrado la página que buscas.</h3>
                <a href="/" className={styles.button}>Ir a inicio</a>
            </div>
        </Layout>
  )
}