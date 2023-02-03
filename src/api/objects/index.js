import request from "../request";

export function getObjects() {
	return request("getObjects");
}

export function getObjectById(id) {
	return request(`getObject/${id}`);
}
