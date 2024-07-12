import axios from "axios";
import { useState } from "react";

const Article = ({ article, content, getData }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, seteditContent] = useState("");
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
    const handleEdit = () => {
        const data = {
            author: article.author,
            content: editContent ? editContent : article.content,
            date: article.date,
            updatedDate: Date.now(),
        };

        axios.put('http://localhost:3000/articles/' + article.id, data).then(() => {
            setIsEditing(false);
        })
    }
    const handleDelete = () => {
        axios.delete('http://localhost:3000/articles/' + article.id);
        getData;
    } 
    return (
        <div className="article" style={{ background: isEditing ? "#f3feff" : "white" }}>
            <div className="article-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateFormat(article.date)}</em>
            </div>
            {isEditing ? <textarea onChange={(e) => seteditContent(e.target.value)} defaultValue={editContent ? editContent : content} className="textaEdit" autoFocus></textarea> : <p>{editContent ? editContent : article.content}</p>}

            <div className="btn-container">
                {isEditing ? <button onClick={() => handleEdit()}>Valider</button> : <button onClick={() => setIsEditing(true)}>Editer</button>}
                <button onClick={() => {
                    if(window.confirm("Voulez-vous vriment supprimer cette aricle ? ")){
                        handleDelete();
                    }
                }}>Supprimer</button>
            </div>
        </div >
    );
}

export default Article;