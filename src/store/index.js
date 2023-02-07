import { createStore } from "vuex";

export const store = createStore({
	state: {
		isAuth: false,
		balance: 0,
	},
	mutations: {
		authenticate(state) {
			state.isAuth = true;
		},
		logout(state) {
			state.isAuth = false;
		},
		updateBalance(state, payload) {
			state.balance = payload;
		},
	},
});
