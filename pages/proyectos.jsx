import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';
import documentSetTitle from '../components/documentSetTitle';

export default function Proyectos() {
  documentSetTitle('Proyectos • Facyn')
  return (
      <Layout>
        <h1 className={styles.pageTitle}>Proyectos</h1>
        <div className={styles.pageConectorMini}>                           
              <div></div>
              <div></div>
        </div>
        <div className={styles.card}>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <div className={styles.projectTitle}>
                        <img src="https://simplecalculator.ml/assets/img/logo.ico" alt="Simple Calculator Logo" />
                        <span>Simple Calculator</span>
                    </div>
                    <p>Es una aplicación de calculadora básica, es lo ensencial para hacer las cuentas del día y agilizar de una manera mas rápida el proceso.</p>
                    <div className={styles.pageLineDivisor}></div>
                    <a href="https://simplecalculator.ml" className={styles.pageButton} target="_blank">Ir</a>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectTitle}>
                        <img src="https://todolistapp.tk/assets/img/todolist-logo-bordeado.ico" alt="Todo List" />
                        <span>Todo List</span>
                    </div>
                    <p>Si eres esa persona que se olvida de hacer las tareas del día, con To-Do List App eso no va a pasar más, con esta aplicación podras anotarte todo lo que desees.</p>
                    <div className={styles.pageLineDivisor}></div>
                    <a href="https://todolistapp.tk" className={styles.pageButton} target="_blank">Ir</a>
                </div>
            </div>
        </div>
      </Layout>
  )
}