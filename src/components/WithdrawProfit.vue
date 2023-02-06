<template>
	<div class="invest" @click.stop="closeModal">
		<div class="invest__container" @click.stop>
			<div class="invest__close" @click="closeModal">
				<UIIcon path="invest_close" />
			</div>

			<h2 class="title">WITHDRAW</h2>
			<div class="pt-4">
				<Text
					placeholder="ERC-20 Polygon USDT"
					v-model="walletAddress"
					type="number"
					name="amount"
				/>

				<label class="form-check-label w-75 pt-1 ps-1" for="check2"
					>Paste your ERC-20 Polygon wallet address</label
				>
				>
			</div>
			<button class="ui-btn btn-outline color-main" @click="withdraw">
				Withdraw
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			walletAddress: null,
		};
	},
	props: {
		objectId: { type: Number, required: true },
	},
	emits: ["closeModal"],
	methods: {
		closeModal() {
			this.$emit("closeModal");
		},
		async withdraw() {
			if (
				!this.selectedAmount ||
				this.selectedAmount < 1 ||
				this.selectedAmount > 20
			) {
				return;
			}
			if (!this.$store.state.isAuth) {
				this.$router.push({ name: "SignUp" });
				return;
			}
			const walletAddress = localStorage.getItem("wallet_address");
			if (walletAddress) {
				const res = await invest(
					walletAddress,
					this.selectedAmount,
					this.objectId
				);
				if (!res.status) {
					console.log(res.error);
				}
			} else {
				const link = await investWithCreds(
					this.objectId,
					this.selectedAmount
				);
				if (link) {
					this.$router.go(link);
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.invest {
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 90;
	background: rgba(0, 0, 0, 0.53);
	&__container {
		width: 588px;
		height: 379px;
		position: relative;
		background: #ffffff;
		border-radius: 8px;
		padding: 75px 100px;
	}
	&__close {
		position: absolute;
		top: 10px;
		right: 16px;
	}
	&__cost {
		margin-top: 16px;
		font-size: 14px;
	}
	button {
		margin-top: 33px;
		width: 194px;
	}
}
@media screen and (max-width: 528px) {
	.invest {
		&__container {
			padding: 75px 30px;
			button {
				margin-top: 45px;
				width: 100%;
			}
		}
	}
}
</style>
