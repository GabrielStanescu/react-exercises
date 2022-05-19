import React, { useState, useEffect, Component } from "react";
import Article, { ArticleData } from "../components/Article";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

type PageState = {
    startIndex: number;
    endIndex: number;
    articlesDisplayed: number;
}

function Home() {
    const [error, setError] = useState([] as any);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([] as ArticleData[]);
    const [page, setPage] = useState<PageState> ({
        startIndex: 0,
        endIndex: 2,
        articlesDisplayed: 3
    });

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
        const articleList = articles
        .filter((article, index) => index >= page.startIndex && index <= page.endIndex)
        .map(article => (<Article key={article.id} article={article}></Article>));
        return (
            <div className="container">
                <Menu></Menu>
                <div className="add__container">
                    <button type="button" className="add__button" id="add_article"> + Add Article</button>
                </div>
                <main id="main">
                    {
                        articleList
                    }
                </main>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;