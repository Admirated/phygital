const urlRoot = "https://pre.pultik.xyz/";

const request = function (url, method, data, headers = {}) {
	return fetch(urlRoot + url, {
		method: method,
		headers: {
			...headers,
			"Content-Type": "application/json",
			"Accept": "application/json",
		},
		body: data ? JSON.stringify(data) : null,
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			new Error(err);
		});
};

export default request;
