<template>
	<UIIcon class="d-inline-block pe-2 icon-back" path="Back" @click="back" />
	<h3 class="d-inline-block">Verification</h3>
	<template v-if="!type">
		<div
			class="row verify-type mt-4 ms-0 me-0 w-100"
			@click="select(verifyType.type)"
			:key="verifyType.type"
			v-for="verifyType in verifyTypes"
		>
			<div class="col-3 p-0">
				<div
					class="icon-box d-flex align-items-center justify-content-center"
				>
					<UIIcon :path="verifyType.type" />
				</div>
			</div>
			<div class="col-9 p-0 d-flex align-items-center">
				<span class="verify-title" v-text="verifyType.title"></span>
			</div>
		</div>
	</template>

	<VerificationWallet v-if="type === 'Wallet'" :description="description" />
	<VerificationMail v-if="type === 'Mail'" :description="description" />
</template>

<script>
import VerificationWallet from "./VerificationWallet.vue";
import VerificationMail from "./VerificationMail.vue";

export default {
	name: "Verification",
	components: {
		VerificationWallet,
		VerificationMail,
	},
	props: {
		description: {
			type: String,
			required: true,
		},
	},
	emits: ["back"],
	data() {
		return {
			type: null,
			verifyTypes: [
				{
					title: "Verifiaction by crypto wallet",
					type: "Wallet",
				},
				{
					title: "Verifiaction by email",
					type: "Mail",
				},
			],
		};
	},
	methods: {
		select(type) {
			this.type = type;
		},
		back() {
			if (!this.type) {
				this.$emit("back");
			}
			this.type = null;
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
		background: var(--light-main);
		border-radius: 4px;
		span {
			height: 27px;
		}
	}
	.verify-title {
		font-family: Roboto, sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
	}
}
</style>
