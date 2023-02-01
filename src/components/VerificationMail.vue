<template>
	<div class="pt-4">
		<label>Email</label>
		<Text placeholder="Email" v-model="email" name="username" type="email" />
	</div>
	<div class="pt-4">
		<label>Name</label>
		<Text placeholder="Name" v-model="name" name="name" />
	</div>
	<div class="pt-4 mb-4">
		<label>Password</label>
		<Text
			placeholder="Password"
			type="password"
			v-model="password"
			name="password"
		/>
	</div>
	<div class="mb-3 form-check">
		<input
			type="checkbox"
			class="form-check-input"
			id="check1"
			v-model="policy"
			checked
		/>
		<label class="form-check-label w-75 ps-1" for="check1"
			>Accept private policy</label
		>
	</div>
	<div class="mb-2 form-check">
		<input
			type="checkbox"
			class="form-check-input"
			id="check2"
			v-model="receive"
		/>
		<label class="form-check-label w-75 pt-1 ps-1" for="check2"
			>Receive commercial information on real estate, news and service offers
			from idealista; id/mortgages; id/insurance; Avaibook; BDMI;
			rental;</label
		>
	</div>
	<button class="ui-btn btn-outline color-main mt-4 mb-0" @click="verificate">
		Submit
	</button>
</template>

<script>
import { signUpWithCreds } from "@/api/auth";
export default {
	name: "VerificationMail",
	props: {
		description: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			email: "",
			password: "",
			name: "",
			policy: false,
			receive: false,
		};
	},
	methods: {
		async verificate() {
			if (!this.policy || !this.email || !this.password) {
				return;
			}
			const res = await signUpWithCreds(
				this.email,
				this.name,
				this.password,
				this.description
			);
			if (res.access_token) {
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
	},
};
</script>

<style lang="scss" scoped>
.form-check-label {
	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 137%;
	color: var(--text);
}
button {
	margin-top: 33px;
	width: 194px;
}
</style>
