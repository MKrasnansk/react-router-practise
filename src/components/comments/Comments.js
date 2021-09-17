import React from "react";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "./../UI/LoadingSpinner";
import "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const params = useParams();

	const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
	const { quoteId } = params;
	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};
	const addedCommentHandler = useCallback(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	let comments;
	if (status === "pending") {
		comments = (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}
	if (status === "completed" && loadedComments && loadedComments.length > 0) {
		comments = <CommentsList comments={loadedComments} />;
	}
	if (status === "completed" && (!loadedComments || loadedComments.length === 0)) {
		comments = <p className="centered">No comments for now!</p>;
	}

	return (
		<section className={"comments"}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className="btn" onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
			{comments}
		</section>
	);
};

export default Comments;
