import React from "react";

//@ts-ignore
export default function Footer(props) {
    console.log(props);
    return (
        <footer className="footer__container">
            <a className="footer__text" onClick={() => {
                if (props.val.startIndex >= props.val.articlesDisplayed)
                    props.fun({
                        startIndex: props.val.startIndex - props.val.articlesDisplayed,
                        endIndex: props.val.endIndex - props.val.articlesDisplayed,
                        articlesDisplayed: 3
                    })
            }}>previous</a>
            <a className="footer__text" onClick={() => {
                if (props.val.endIndex < props.articleCount.length)
                    props.fun({
                        startIndex: props.val.startIndex + props.val.articlesDisplayed,
                        endIndex: props.val.endIndex + props.val.articlesDisplayed,
                        articlesDisplayed: 3
                    })
            }}>next</a>
        </footer>
    );
}