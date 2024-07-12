import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import axios from "axios";
import Article from "../components/Article";

const Blog = () => {
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
                author: "TEST",
                content,
                date: Date.now()
            });
        }
    }
    return (
        <>

            <div className="blog">
                <Logo />
                <h1>blog</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder="Nom" /> <br />
                    <textarea
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
                                <Article key={article.id} article={article} />
                            ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Blog;