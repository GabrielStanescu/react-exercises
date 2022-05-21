import React from 'react'

//@ts-ignore
function Modal(props) {
    return (
        <div id="modal">
            <div className="modal__content">
                <h1 className="modal__text">Add/Edit Article</h1>
                <div className="modal__input">
                    <input className="modal__form" id="i1" value={props.tempArticle.title} placeholder="Please enter title" />
                    <input className="modal__form" id="i2" value={props.tempArticle.tag} placeholder="Please enter tag" />
                    <input className="modal__form" id="i3" value={props.tempArticle.author} placeholder="Please enter author" />
                    <input className="modal__form" id="i4" value={props.tempArticle.date} placeholder="Please enter date" />
                    <input className="modal__form" id="i5" value={props.tempArticle.imgUrl} placeholder="Please enter image url" />
                    <input className="modal__form" id="i6" value={props.tempArticle.content} placeholder="Please enter content" />
                </div>
                <div className="modal__buttons">
                    <button className="add__button" id="cancel" onClick={() => {props.setShowModal(false)}}>Cancel</button>
                    <button className="add__button" id="save">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal