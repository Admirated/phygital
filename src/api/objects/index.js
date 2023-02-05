import request from "../request";

export function getObjects() {
	return request("getObjects");
}

export function getObjectById(id) {
	return request(`getObject/${id}`);
}

export function investWithCreds(objectId, amount) {
	const body = { property_id: objectId, amount };
	return request("generatePaymentLink", "POST", body, {
		Authorization: "Bearer " + localStorage.getItem("_token"),
	});
}
