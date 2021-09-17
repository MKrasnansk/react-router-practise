import React from "react";

import CommentItem from "./CommentItem";
import "./CommentsList.module.css";

const CommentsList = (props) => {
	return (
		<ul className={"comments"}>
			{props.comments.map((comment) => (
				<CommentItem key={comment.id} text={comment.text} />
			))}
		</ul>
	);
};

export default CommentsList;
