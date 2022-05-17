import React, { useState, useEffect } from "react";
import Article, { ArticleData } from "../components/Article";

function Home() {
    const [error, setError] = useState([] as any);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([] as ArticleData[]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:4000/articles")
            .then(res => res.json())
            .then(
                (result: ArticleData[]) => {
                    setIsLoaded(true);
                    setArticles(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error === true) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <main>
                {
                    articles.map(article => (<Article key={article.id} article={article}></Article>))
                }
            </main>
        );
    }
}

export default Home;