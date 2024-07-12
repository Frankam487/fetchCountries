const Article = ({ article }) => {
    const dateFormat = (chaine) => {
        let newDate = new Date(chaine).toLocaleDateString("FR-fr", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",

        })
        return newDate;
    }
    return (
        <div className="article">
            <div className="article-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateFormat(article.date)}</em>
            </div>
            <p>{article.content}</p>
            <div className="btn-container">
                <button>Edit</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
}

export default Article;