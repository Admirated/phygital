<template>
	<div
		class="row verify-type mt-4 ms-0 me-0 w-100"
		v-for="wallet in wallets"
		:key="wallet.title"
		@click="connectWallet"
	>
		<div class="col-3 p-0">
			<div
				class="icon-box d-flex align-items-center justify-content-center ps-1 ps-lg-3"
			>
				<UIIcon :path="wallet.icon" />
			</div>
		</div>
		<div class="col-9 p-0 ps-2 ps-lg-0">
			<div class="verify-title pt-2" v-text="wallet.title"></div>
			<div class="verify-text pt-1" v-text="wallet.text"></div>
		</div>
	</div>
</template>

<script>
import { connect } from "@/api/wallet";
import { signUpWithWallet } from "@/api/auth";
export default {
	name: "VerificationWallet",
	props: {
		description: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			address: "",
			wallets: [
				// {
				// 	title: "MetaMask",
				// 	text: "Desktop",
				// 	icon: "Metamask",
				// },
				{
					title: "WalletConnect",
					text: "Desktop & Mobile",
					icon: "WalletConnect",
				},
				// {
				// 	title: "Trust wallet",
				// 	text: "Mobile",
				// 	icon: "TrustWallet",
				// },
			],
		};
	},
	methods: {
		async connectWallet() {
			this.address = await connect();
			const res = await signUpWithWallet(this.address, this.description);
			if (!res.detail) {
				this.$store.commit("authenticate");
				this.$router.push({ name: "Home" });
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.verify-type {
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 12px;
	cursor: pointer;
	.icon-box {
		width: 60px;
		height: 60px;
	}
	.verify-title {
		font-family: Roboto, sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
	}
	.verify-text {
		font-family: Roboto, sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		color: var(--text);
	}
}
</style>
