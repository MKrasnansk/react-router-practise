import React from "react";

import { Link } from "react-router-dom";
import "./QuoteItem.module.css";

const QuoteItem = (props) => {
	return (
		<li className={"item"}>
			<figure>
				<blockquote>
					<p>{props.text}</p>
				</blockquote>
				<figcaption>{props.author}</figcaption>
			</figure>
			<Link to={`/quotes/${props.id}`} className="btn">
				View Fullscreen
			</Link>
		</li>
	);
};

export default QuoteItem;
