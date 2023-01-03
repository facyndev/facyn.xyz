import { Fragment, useState, useEffect } from 'react';
import { connectHits } from 'react-instantsearch-dom';
import styles from '../../styles/all.module.css';
import PulseLoader from "react-spinners/PulseLoader";

const Hits = ({ hits }) => {
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
    <Fragment>
    <div className={styles.pageLoading}>
        {loading ? 
        <PulseLoader 
        color={'#000000'} 
        loading={loading} 
        size={30} />
        :
    <div className={styles.posts}>
        {hits.map(hit => (
            <a href={hit.link} key={hit.objectID}>
                <h3 title={hit.title}>{hit.title}</h3>
                <p title={hit.description}>{hit.description}</p>
                <span title={hit.pubDate}>{hit.pubDate}</span>
            </a>
        ))}
    </div>
    }
    </div>
    </Fragment>
    )
};

export default connectHits(Hits);
