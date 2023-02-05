<template>
	<div class="row m-0 d-flex justify-content-center">
		<div class="col-12 col-lg-6 col-xl-5 p-0">
			<div class="card border-0 card__wave">
				<div class="card-body">
					<h3>Sign in</h3>
					<div class="pt-4">
						<label class="form-label">Email</label>
						<Text
							placeholder="Email"
							v-model="email"
							type="email"
							name="email"
						/>
					</div>
					<div class="pt-4 mb-3">
						<label class="form-label">Password</label>
						<Text
							placeholder="Password"
							v-model="password"
							type="password"
							name="password"
						/>
					</div>
					<button
						class="ui-btn btn-outline color-main mt-4 mb-0"
						@click="login"
					>
						Submit
					</button>
					<div class="login__separator">or</div>
					<button
						class="ui-btn btn-outline color-main mt-4 mb-0"
						@click="connectWallet"
					>
						Connect Wallet
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { connect } from "@/api/wallet";
import { signInWithCreds } from "@/api/auth";
export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		async login() {
			const res = await signInWithCreds(this.email, this.password);
			if (res && res.access_token) {
				localStorage.setItem(
					"_token",
					res.access_token.replace(/['"]/g, "")
				);
				localStorage.setItem(
					"_token2",
					res.refresh_token.replace(/['"]/g, "")
				);
				this.$store.commit("authenticate");
				this.$router.push({ name: "Home" });
			}
		},
		async connectWallet() {
			this.address = await connect();
			if (this.address) {
				this.$store.commit("authenticate");
				localStorage.setItem("wallet_address", this.address);
				localStorage.removeItem("_token");
				this.$router.push({ name: "Home" });
			}
		},
	},
};
</script>
<style scoped>
button {
	margin-top: 33px;
	width: 194px;
}
.login__separator {
	margin-top: 16px;
	padding-left: 86px;
	font-family: Roboto, sans-serif;
	font-size: 16px;
	line-height: 17px;
	font-weight: 400;
}
</style>
