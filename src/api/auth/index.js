import request from "../request";

export function signUpWithWallet(address, description) {
	const body = { wallet_address: address, description };
	return request("register", "POST", body);
}

export function signUpWithCreds(email, name, password, description) {
	const body = { username: email, name, password, description };
	return request("register", "POST", body);
}

export function signInWithCreds(email, password) {
	const body = { username: email, password };
	return request("login", "POST", body);
}
