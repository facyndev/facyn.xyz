import { Layout } from '../components/Layout';
import styles from '../styles/all.module.css';
import { getAllFilesMetaData } from '../library/mdx.js';
import documentSetTitle from '../components/documentSetTitle';
import Search from '../components/Search/Search';

export default function Posts({ posts }) {
    documentSetTitle('Blogs • Facyn')
    return (
        <Layout>
            <br />
            <br />
            <br />
            <h1 className={styles.pageTitle}>Blogs</h1>
            <div className={styles.pageConectorMini}>
              <div></div>
              <div></div>
            </div>
            <Search />
            <br />
            <br />
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesMetaData();
  
    return {
      props: { posts },
    };
  }