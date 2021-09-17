import React from "react";

import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import "./QuoteForm.module.css";

const QuoteForm = (props) => {
	const [isEntered, setIsEntered] = useState(false);
	const authorInputRef = useRef();
	const textInputRef = useRef();

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		// optional: Could validate here

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	const formFocusedHandler = () => {
		setIsEntered(true);
	};
	const finishEnteredHandler = () => {
		setIsEntered(false);
	};
	return (
		<Fragment>
			<Prompt when={isEntered} message={(location) => "Are you sure you want to leave? All your entered data will be lost!"} />
			<Card>
				<form onFocus={formFocusedHandler} className={"form"} onSubmit={submitFormHandler}>
					{props.isLoading && (
						<div className={"loading"}>
							<LoadingSpinner />
						</div>
					)}

					<div className={"control"}>
						<label htmlFor="author">Author</label>
						<input type="text" id="author" ref={authorInputRef} />
					</div>
					<div className={"control"}>
						<label htmlFor="text">Text</label>
						<textarea id="text" rows="5" ref={textInputRef}></textarea>
					</div>
					<div className={"actions"}>
						<button onClick={finishEnteredHandler} className="btn">
							Add Quote
						</button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default QuoteForm;
