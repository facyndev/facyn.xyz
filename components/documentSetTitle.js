import { useEffect } from 'react';

export default function documentSetTitle(title) {
    useEffect(() => {
        document.title = title
    }, [title])
}