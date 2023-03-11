import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';
import { FaLink } from 'react-icons/fa';

export default function Projects() {
    return (
        <Layout
        title="Proyectos - Facyn"
        description="Proyectos de Facyn.">
            <div className={styles.projectCards}>
                <div className={styles.card}>
                    <img src="/rashsecurity.png" alt="Rash Security Logo" />
                    <div>
                        <h3>Rash Security</h3>
                        <p>Rash Security es un bot de Discord que se encarga de la seguridad de tu servidor.</p>
                    </div>
                    <div className={styles.cardLine}></div>
                    <div className={styles.footerButton}>
                        <a href="/rashsecurity" target="_blank"><FaLink /> Ver</a>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://simplecalculator.ml/assets/img/logo.ico" alt="Simple Calculator Logo" />
                    <div>
                        <h3>Simple Calculator</h3>
                        <p>Simple Calculator es una herramienta, que bien por su nombre, cálcula.</p>
                    </div>
                    <div className={styles.cardLine}></div>
                    <div className={styles.footerButton}>
                        <a href="/simplecalculator" target="_blank"><FaLink /> Ver</a>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://todolistapp.tk/assets/img/todolist-logo-bordeado.ico" alt="To-Do List App Logo" />
                    <div>
                        <h3>To-Do List App</h3>
                        <p>To-Do List App es la aplicación que hara que no olvides tus tareas diarias.</p>
                    </div>
                    <div className={styles.cardLine}></div>
                    <div className={styles.footerButton}>
                        <a href="/todolistapp" target="_blank"><FaLink /> Ver</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}