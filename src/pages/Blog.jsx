import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import axios from "axios";
import Article from "../components/Article";

const Blog = () => {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [textaError, setTextaError] = useState(false);
    const [blogData, setBlogData] = useState([]);
    const getData = () => {
        axios.get("http://localhost:3000/articles").then((res) => setBlogData(res.data))
    }
    useEffect(() => {
        getData();
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.length < 140) {
            setTextaError(true);
        } else {
            setTextaError(false);
            axios.post("http://localhost:3000/articles", {
                author,
                content,
                date: Date.now()
            });
            setTextaError(false)
            setAuthor("");
            setContent("");
            getData();
        }
    }
    return (
        <>

            <div className="blog">
                <Logo />
                <h1>blog</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" value={author} placeholder="Nom" onChange={(e) => setAuthor(e.target.value)} /> <br />
                    <textarea value={content}
                        style={{ border: textaError ? "1px solid red" : "1px solid rgba(0, 202, 247, 0.884)" }}
                        onChange={(e) => setContent(e.target.value)} placeholder="Message"></textarea> <br />
                    <input className="submit" type="submit" defaultValue="Envoyer" />
                    {textaError && <p>Le message doit contenir au moins 140 caracteres!!</p>}
                </form>

                <ul className="ul">
                    {
                        blogData
                            .sort((a, b) => b.date - a.date)
                            .map((article) => (
                                <Article key={article.id} article={article} content={article.content}/>
                            ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Blog;