import request from "../request";

export function getUserInfo() {
	return request("me", "GET", null, {
		Authorization: "Bearer " + localStorage.getItem("_token"),
	});
}

export function getUserWallet() {
	return request("getWalletAddress", "GET", null, {
		Authorization: "Bearer " + localStorage.getItem("_token"),
	});
}

export function getUserPrivateKey() {
	return request("exportPrivateKey", "GET", null, {
		Authorization: "Bearer " + localStorage.getItem("_token"),
	});
}
