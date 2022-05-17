import React from "react";

interface IArticle {
    article: ArticleData;
}

export interface ArticleData {
    id: number;
    title: string;
    tag: string;
    author: string;
    date: string;
    imgUrl: string;
    saying: string;
    content: string;
}

export default function Article(props: IArticle) {
    const { article } = props;
    return (
        <article>
            <h1 className="title">{article.title}</h1>
            <ul className="info__container">
                <li className="info__item">{article.tag}</li>
                <li className="info__item">•</li>
                <li className="info__item">Added by
                    <span className="info__author">{article.author}</span></li>
                <li className="info__item">•</li>
                <li className="info__item">{article.date}</li>
            </ul>
            <div className="modify__container">
                <button type="button" className="modify__button edit_article">Edit</button>
                <button type="button" className="modify__button">Delete</button>
            </div>
            <img src={article.imgUrl} alt = "img"></img>
            <div className="content__container">
                <p className="content__text">{article.content.substring(0, 1000)}</p>
            </div>
        </article>
    );
};