import React from 'react'

//@ts-ignore
function Modal(props) {
    const fetchArticle = () => {
        const id =  props.tempArticle.id;
        console.log(id);
        const fetchUrl = id === 0 ? 'http://localhost:4000/articles' : 'http://localhost:4000/articles/' + id;
        fetch(fetchUrl, {
            method: id === 0 ? 'POST' : 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(props.tempArticle)
        })
        .then(function() {
            props.setShowModal(false);
        })
    }

    return (
        <div id="modal">
            <div className="modal__content">
                <h1 className="modal__text">Add/Edit Article</h1>
                <div className="modal__input">
                    <input className="modal__form" id="i1" value={props.tempArticle.title} onChange={e => props.setTempArticle({...props.tempArticle, title: e.target.value})} placeholder="Please enter title" />
                    <input className="modal__form" id="i2" value={props.tempArticle.tag} onChange={e => props.setTempArticle({...props.tempArticle, tag: e.target.value})} placeholder="Please enter tag" />
                    <input className="modal__form" id="i3" value={props.tempArticle.author} onChange={e => props.setTempArticle({...props.tempArticle, author: e.target.value})} placeholder="Please enter author" />
                    <input className="modal__form" id="i4" value={props.tempArticle.date} onChange={e => props.setTempArticle({...props.tempArticle, date: e.target.value})} placeholder="Please enter date" />
                    <input className="modal__form" id="i5" value={props.tempArticle.imgUrl} onChange={e => props.setTempArticle({...props.tempArticle, imgUrl: e.target.value})} placeholder="Please enter image url" />
                    <input className="modal__form" id="i6" value={props.tempArticle.content} onChange={e => props.setTempArticle({...props.tempArticle, content: e.target.value})} placeholder="Please enter content" />
                </div>
                <div className="modal__buttons">
                    <button className="add__button" id="cancel" onClick={() => {props.setShowModal(false)}}>Cancel</button>
                    <button className="add__button" id="save" onClick={() => {fetchArticle()}}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal