const TOKEN = "AAAAFj8qBn8:APA91bF9R6IRFsWBgHAw4G6Xq-fnMdFJmUaS5aua1Iv1Axn54BzCe9yqvwPwYmILbb0cE0V9wP5GgxfrwSqjkLWUiCZTi6EFiZ9QLq-vuuU0t0RWPi2rA54OBxft1vTd8QDUurzXClOc";
const FIREBASE_DOMAIN = `https://react-prep-6e47c-default-rtdb.europe-west1.firebasedatabase.app/?auth=${TOKEN}`;

export async function getAllQuotes() {
	const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, { mode: "same-origin" });
	const data = await response.json();
	console.log(await data);

	if (!response.ok) {
		throw new Error(data.message || "Could not fetch quotes.");
		console.log(data.message);
	}

	const transformedQuotes = [];

	for (const key in data) {
		const quoteObj = {
			id: key,
			...data[key],
		};

		transformedQuotes.push(quoteObj);
	}

	return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
	const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not fetch quote.");
	}

	const loadedQuote = {
		id: quoteId,
		...data,
	};

	return loadedQuote;
}

export async function addQuote(quoteData) {
	const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
		method: "POST",
		body: JSON.stringify(quoteData),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not create quote.");
	}

	return null;
}

export async function addComment(requestData) {
	const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
		method: "POST",
		body: JSON.stringify(requestData.commentData),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not add comment.");
	}

	return { commentId: data.name };
}

export async function getAllComments(quoteId) {
	const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Could not get comments.");
	}

	const transformedComments = [];

	for (const key in data) {
		const commentObj = {
			id: key,
			...data[key],
		};

		transformedComments.push(commentObj);
	}

	return transformedComments;
}
