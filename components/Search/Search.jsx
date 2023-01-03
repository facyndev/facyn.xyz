import styles from '../../styles/all.module.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure, Highlight } from 'react-instantsearch-dom';
import CustomSearchBox from './CustomSearchBox';
import Hits from './CustomHits';

const Hit = ({hit}) => <Highlight hit={hit} atribute="title"/>

export default function Search() {

    const searchClient = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
        process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
    )

    return (
        <div className={styles.card}>
        <InstantSearch 
        searchClient={searchClient} 
        indexName="facyn_index">
        <CustomSearchBox hitComponent={Hit}/>
        <Hits/>
        <Configure
            hitsPerPage={20}
            analytics={false}
            enablePersonalization={false}
            distinct
        />
      </InstantSearch>
        </div>
    )
}

