import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';
import { getAllFilesMetaData } from '../library/mdx.js';
import { useEffect } from 'react';
import documentSetTitle from '../components/documentSetTitle';
import Social from '../components/Social/Social.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home({ posts }) {
  // Generate two random posts.
  documentSetTitle('Inicio • Facyn')
  let randomPosts = getMultipleRandomPosts(posts, 2);

  function getMultipleRandomPosts(posts, num) {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num)
  }

  // Scroll animation.

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, [])

  return (
      <Layout>
        <div className={styles.cardAboutme}>
          <div className={styles.aboutme}>
            <img src="/facyn.ico" className={styles.cardLogo} alt="Facyn Logo" />
            <span>@Facyn</span>
            <p>Hola, mi nombre es <b>Facundo Grieco</b> alias <b>Facyn</b>! 😀 Me localizo en 📍 <b>Santa Fe, Argentina</b>, tengo 17 años y estoy estudiando en la escuela <b>EETP 275 (Escuela Educación Técnica N° 275)</b></p>
            <div className={styles.pageLineDivisor}></div>
            <Social />
          </div>
          <div className={styles.pageConector} data-aos="fade-down">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
        </div>
        <h2 className={styles.pageSubtitle} data-aos="fade-right">Skills</h2>
        <div className={styles.pageConectorMini} data-aos="fade-down">
              <div></div>
              <div></div>
        </div>
        <div className={styles.skills} id="skills" data-aos="fade-down">
            <div className={styles.pageFlex}>
              <img src="/svg/icons/html5.svg" title="Lenguaje: HTML5" alt="HTML5 Icon" />
              <img src="/svg/icons/css3.svg" title="Lenguaje: CSS3" alt="CSS3 Icon" />
              <img src="/svg/icons/javascript.svg" title="Lenguaje: JavaScript" alt="JavaScript Icon" />
              <img src="/svg/icons/nodejs.svg" title="Lenguaje: NodeJS" alt="NodeJS Icon" />
            </div>
            <div className={styles.pageLineDivisor}></div>
            <p>Estas son mis habilidades actuales, aunque sigo aprendiendo más y más, como por ejemplo ahora mismo estoy avanzando con <b>React</b> y puede que en un tiempo aparezca aquí.</p>
        </div>
        <div className={styles.pageConector} data-aos="fade-down">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
        </div>
        <h2 className={styles.pageSubtitle} data-aos="fade-right">¡Un poco más de mi!</h2>
        <div className={styles.pageConectorMini} data-aos="fade-down">
              <div></div>
              <div></div>
        </div>
        <div className={styles.moreAboutMe} data-aos="fade-down">
          <div className={styles.cardQuestion}>
            <span>¿Porque el nombre "Facyn"?</span>
            <div className={styles.response}>
              <p>Todo comenzó cuando un día empecé a jugar Valorant (Juego similar al CS:GO), era en la época de fase "BETA", o sea que el juego estaba en modo de prueba y opiniones de la gente. Como todo juego cuentas con un inicio de sesión o crear una cuenta, específicamente yo debía crearme una y ahí fue cuando jugué con las letras de mi nombre real (Facundo) y agregue la famosa "Y" por la "U" y también abreviándolo, quedando así el apodo "Facyn".</p>
            </div>
          </div>
          <div className={styles.cardQuestion}>
            <span>¿Que me inspira a programar?</span>
            <div className={styles.response}>
              <p>Me inspiro mucho en el contenido que veo, el cual es muy frecuente, como tutoriales o proyectos que son muy entretenidos mayormente. Además, ver mis propios logros es algo también que me inspira bastante.</p>
            </div>
          </div>
        </div>
        <div className={styles.pageConector} data-aos="fade-down">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
        </div>
        <h2 className={styles.pageSubtitle} data-aos="fade-right">Blogs Aleatorios</h2>
        <div className={styles.pageConectorMini} data-aos="fade-down">
              <div></div>
              <div></div>
        </div>
        <div className={styles.postsRandom} data-aos="flip-up">
        {randomPosts.map((post) => (
              <a href={`/posts/${post.slug}`} target="_blank">
                <h3 title={post.title}>{post.title}</h3>
                <span>{post.date}</span>
                <p title={post.description}>{post.description}</p>
              </a>
        ))}
        </div>
        <div className={styles.pageConectorMini} data-aos="fade-down">
              <div></div>
              <a href="/posts" className={styles.pageButton}>Ver todos</a>
        </div>
        <div className={styles.pageConector} data-aos="fade-down">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
        </div>
        <h2 className={styles.pageSubtitle} data-aos="fade-right">Contacto</h2>
        <div className={styles.pageConectorMini} data-aos="fade-down">
              <div></div>
              <div></div>
        </div>
        <Contact />
      </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetaData();

  return {
    props: { posts },
  };
}
