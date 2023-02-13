<template>
	<div class="thanks">
		<h1>{{ title }}</h1>
		<p>
			All of your dividends claim into this account:
			<a :href="scanAccount" target="_blank">{{ userWallet }}.</a>
		</p>
		<p>
			1. First you need to
			<a href="https://metamask.io/download/" target="_blank"
				>install MetaMask.</a
			>
		</p>
		<p>
			2. After installation, read the user agreement and click "Import
			Wallet".
		</p>
		<p>
			3. To access your wallet, you will need this secret phrase.
			<span class="text-danger">Do not tell it to anyone.</span>
		</p>
		<p class="phrase">Secret: {{ seedPhrase }}</p>
		<p>4. Copy the phrase and enter it in the fields.</p>
		<p>5. Congratulations, you now have access to your dividends.</p>
		<button
			class="ui-btn btn-outline color-main mt-4 mb-0"
			@click="copyPhrase"
		>
			Copy seed phrase
		</button>
	</div>
</template>

<script>
import { getUserPrivateKey } from "@/api/user";
export default {
	data() {
		return {
			seedPhrase: "",
			isExportPage: false,
		};
	},
	props: {
		export: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	beforeCreate() {
		if (!this.$store.getters.getAuthFlag) {
			this.$router.push({ name: "SignUp" });
		}
	},
	created() {
		if (this.$route.params.export) {
			this.isExportPage = true;
		}
		getUserPrivateKey().then((key) => {
			this.seedPhrase = key;
		});
	},
	computed: {
		scanAccount() {
			return `https://polygonscan.com/address/${this.userWallet}`;
		},
		userWallet() {
			return this.$store.state.walletAddress;
		},
		title() {
			return this.isExportPage
				? "Export seed phrase"
				: "Thanks for investing!";
		},
	},
	methods: {
		copyPhrase() {
			navigator.clipboard.writeText(this.seedPhrase).then(() => {
				this.$notify({
					title: "Success",
					text: `<span>Successfully copied the phrase</span><date>${new Date().toLocaleDateString()}</date>`,
					duration: 2500,
					pauseOnHover: true,
					closeOnClick: true,
				});
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.thanks {
	background: #fff;
	padding: 40px;
	border-radius: 12px;
	max-width: 800px;
	width: calc(100% - 20px);
	margin: 0 auto;
	a {
		color: var(--main);
		font-weight: 700;
	}
	p {
		margin-top: 12px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.text-danger {
		font-weight: 700;
	}

	.phrase {
		color: var(--bs-red);
		border: 1px dashed var(--bs-red);
		font-weight: 600;
		padding: 25px;
		border-radius: 6px;
		word-spacing: 6px;
		text-align: justify;
	}
}
</style>
