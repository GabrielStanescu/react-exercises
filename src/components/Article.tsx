import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";

interface IArticle {
    article: ArticleData;
    showModal: Dispatch<SetStateAction<boolean>>;
    tempArticle: Dispatch<SetStateAction<ArticleData>>;
    reloadPage: Function;
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
    const { article, showModal, tempArticle, reloadPage } = props;

    const fetchDelete = () => {
        fetch('http://localhost:4000/articles/' + article.id, {
            method: 'DELETE',
        })
            .then(function () {
                reloadPage();
            });
    }

    let navigate = useNavigate();

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
                <button type="button" className="modify__button edit_article" onClick={() => {
                    showModal(true);
                    tempArticle({
                        id: article.id,
                        title: article.title,
                        tag: article.tag,
                        author: article.author,
                        date: article.date,
                        imgUrl: article.imgUrl,
                        saying: article.saying,
                        content: article.content
                    });
                }}>Edit</button>
                <button type="button" className="modify__button" onClick={() => fetchDelete()}>Delete</button>
            </div>
            <img src={article.imgUrl} alt="img"></img>
            <div className="content__container">
                <p className="content__text">{article.content.substring(0, 1000)}</p>
            </div>
            <div className="readmore__container">
                <button type="button" className="button" onClick={() => navigate('/details/' + article.id)}>Read More</button>
            </div>
        </article>
    );
};