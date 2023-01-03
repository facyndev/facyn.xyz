export const YouTube = ({ id }) => {
    return (
        <iframe
        src={`https://www.youtube.com/embed/${id}`} 
        title={id}
        width="100%"
        height="500"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    )
}