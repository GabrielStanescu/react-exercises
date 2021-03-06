import React, { useState, useEffect, Component } from "react";
import Article, { ArticleData } from "../components/Article";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Add from "../components/Add";
import Modal from "../components/Modal";

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
        articlesDisplayed: 3,
    });
    const [showModal, setShowModal] = useState(false);
    const [tempArticle, setTempArticle] = useState({
        id: 0,
        title: '',
        tag: '',
        author: '',
        date: '',
        imgUrl: '',
        saying: '',
        content: ''
    });

    const reloadPage = () => {
        fetch("http://localhost:4000/articles")
        .then(res => res.json())
        .then(
            (result: ArticleData[]) => {
                setIsLoaded(true);
                setArticles(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }

    useEffect(() => {
        reloadPage();
    }, [])

    if (error === true) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        const articleList = articles
        .filter((article, index) => index >= page.startIndex && index <= page.endIndex)
        .map(article => (<Article key={article.id} article={article} showModal={setShowModal} tempArticle={setTempArticle} reloadPage={reloadPage}></Article>));
        console.log(articleList);
        console.log(articles);
        console.log(page.startIndex + " " + page.endIndex);
        return (
            <div className="container">
                <Menu></Menu>
                <Add fun={setShowModal} val={showModal}></Add>
                <main id="main">
                    {
                        articleList
                    }
                </main>
                {showModal === true ? <Modal setShowModal={setShowModal} tempArticle={tempArticle} setTempArticle={setTempArticle} reloadPage={reloadPage}></Modal> : <></>}
                <Footer fun={setPage} val ={page} articleCount={articles}></Footer>
            </div>
        );
    }
}

export default Home;