import React from "react";

import "./NoQuotesFound.module.css";
import { Link } from "react-router-dom";

const NoQuotesFound = () => {
	return (
		<div className={"noquotes"}>
			<p>No quotes found!</p>
			<Link className="btn" to="new-quote">
				Add a Quote
			</Link>
		</div>
	);
};

export default NoQuotesFound;
