const urlRoot = "http://168.119.49.10:8081";

const request = function (url, method, data, headers = {}) {
	return fetch(urlRoot + url, {
		method: method,
		headers: {
			...headers,
			// Authorization: "Bearer " + localStorage.getItem("_token"),
		},
		body: data,
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			new Error(err);
		});
};

export default request;
