import { createStore } from "vuex";

export const store = createStore({
	state: {
		isAuth: false,
	},
	mutations: {
		authenticate(state) {
			state.isAuth = true;
		},
	},
});
