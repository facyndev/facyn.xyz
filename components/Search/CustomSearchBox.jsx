import styles from '../../styles/all.module.css';
import { connectSearchBox } from 'react-instantsearch-dom';


function SearchBox({ refine }) {
    return (
        <form action="" role="search">
            <input
            id='algolia_search' 
            type="search"
            placeholder="Buscar..."
            className={styles.inputForm}
            onChange={(e) => refine(e.currentTarget.value)} />
        </form>
    )
}

export default connectSearchBox(SearchBox);