import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';
import documentSetTitle from '../components/documentSetTitle';

export default function Notfound() {
documentSetTitle('No encontrado • Facyn')
  return (
        <Layout>
            <br />
            <br />
            <div className={styles.pageNotfound}>
                <img src="/svg/icons/lupa.svg" alt="Lupa Icon" />
                <h3>Oopss... No se ha encontrado la página que buscas</h3>
                <a href="/" className={styles.pageButton}>Ir a inicio</a>
            </div>
            <br />
            <br />
        </Layout>
  )
}