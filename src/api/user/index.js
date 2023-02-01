import request from "../request";

export function getUserInfo() {
	return request("me", "GET", null, {
		Authorization: "Bearer " + localStorage.getItem("_token"),
	});
}
