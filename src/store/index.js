import { createStore } from "vuex";
import { getUserInfo } from "../api/user";
import { getUSDTBalance } from "../api/wallet";

export const store = createStore({
	state: {
		isAuth: false,
		balance: 0,
		walletAddress: "",
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
		setAddress(state, payload) {
			state.walletAddress = payload;
		},
	},
	getters: {
		getAuthFlag(state) {
			return state.isAuth;
		},
	},
	actions: {
		async updateUserInfo(context) {
			const user = await getUserInfo();
			if (user.id) {
				context.commit("authenticate");
				context.commit("setAddress", user.wallet_address);
				context.dispatch("updateBalance");
			}
		},
		async updateBalance(context) {
			const balance = await getUSDTBalance(context.state.walletAddress);
			context.commit("updateBalance", balance);
		},
	},
});
