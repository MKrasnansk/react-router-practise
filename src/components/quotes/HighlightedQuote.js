import React from "react";
import "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
	return (
		<figure className={"quote"}>
			<p>{props.text}</p>
			<figcaption>{props.author}</figcaption>
		</figure>
	);
};

export default HighlightedQuote;
