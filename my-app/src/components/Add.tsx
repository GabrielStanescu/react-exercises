import React from "react";

//@ts-ignore
export default function Add(props) {
	return (
		<div className="add__container">
			<button type="button" className="add__button" id="add_article" onClick={() => {
				props.fun(true) 
			}}>+ Add Article</button>
		</div>
	);
}