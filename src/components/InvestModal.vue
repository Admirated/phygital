<template>
	<div class="invest" @click.stop="closeModal">
		<div class="invest__container" @click.stop>
			<div class="invest__close" @click="closeModal">
				<UIIcon path="invest_close" />
			</div>

			<h2 class="title">INVEST</h2>
			<div class="pt-4">
				<Text
					placeholder="Write from 1 to 20 NFT"
					v-model="selectedAmount"
					type="number"
					name="amount"
				/>

				<label class="form-check-label w-75 pt-1 ps-1" for="check2"
					>Type amount of nft (1-20)</label
				>
			</div>
			<button class="ui-btn btn-outline color-main" @click="invest">
				Invest
			</button>
		</div>
	</div>
</template>

<script>
import { invest } from "@/api/wallet";
import { investWithCreds } from "@/api/objects";
export default {
	data() {
		return {
			options: ["10 NFT", "12 NFT", "14 NFT", "16 NFT", "18 NFT", "20 NFT"],
			selectedAmount: null,
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
		async invest() {
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
				const res = await investWithCreds(
					this.objectId,
					this.selectedAmount
				);
				console.log(res);
			}
		},
		selectOption(value) {
			this.selectedAmount = parseInt(value.split(" "));
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
