<template>
	<InvestModal
		v-if="isWithdrawModalOpen"
		:objectId="1"
		@closeModal="isWithdrawModalOpen = false"
	/>
	<div
		class="row m-0 mt-lg-5 d-block d-lg-flex justify-content-center"
		v-if="permission"
	>
		<div class="col-12 col-lg-11 p-0 mb-4 mb-lg-0">
			<h2 class="page__title"><span>Investors</span> view</h2>
		</div>
		<div
			class="col-12 col-lg-11 p-0"
			v-for="object in objects"
			:key="object.id"
		>
			<div class="card border-0 mb-5 pb-3 mb-lg-4 pb-lg-0">
				<div class="card-body p-0 px-4 px-lg-0 investors__card">
					<img class="d-inline-block" :src="object.img" />
					<div
						class="row m-0 d-inline-block p-0 pt-2 pe-lg-5 ps-lg-4 pt-lg-4 investor-row"
					>
						<div
							class="col-12 p-0 ps-1 pb-4 d-flex align-items-center flex-flow-wrap"
						>
							<div
								class="icon-box d-flex align-items-center justify-content-center mt-3"
							>
								<UIIcon path="Build" />
							</div>
							<div class="ps-2 mt-2 mt-lg-3 investor-title">
								<h5
									class="mb-1 d-inline-block d-lg-block"
									v-text="object.area"
								></h5>
								<div class="listings__card-flag">
									<img :src="getFlag(object.country)" alt="" />
								</div>

								<p
									class="description mb-0 pt-0 pt-lg-1"
									v-text="object.city"
								></p>
							</div>

							<div class="feature mt-4 mt-lg-0">
								<span>Funding target</span>
								<p
									class="mb-0 mt-2"
									v-text="numberFormat(object.total) + ' ' + '€'"
								></p>
							</div>
							<div class="feature mt-4 mt-lg-0">
								<span>Investment term</span>
								<p class="mb-0 mt-2" v-text="object.term"></p>
							</div>
							<div class="feature mt-4 mt-lg-0">
								<span>Est. annual return</span>
								<p
									class="mb-0 mt-2"
									v-text="(object.invested / object.total) * 100 + '%'"
								></p>
							</div>
						</div>
						<hr />
						<div
							class="col-12 p-0 mt-5 pt-1 d-flex align-items-center claim__wrapper"
						>
							<div class="dividends">
								You can withdraw {{ amount }} $
							</div>
							<button
								class="ui-btn btn-outline color-black ms-0 ms-lg-3"
								:disabled="amount < 0.01"
								@click="claim"
							>
								Claim profit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import InvestorCalendar from "../components/InvestorCalendar.vue";
import { getUserWallet } from "@/api/user";
import {
	getClaimableAmount,
	claimDividends,
	getUSDTBalance,
} from "@/api/wallet";
import { getObjects, claimProfitWithCreds } from "@/api/objects";

export default {
	components: {
		InvestorCalendar,
	},
	mounted() {
		if (!this.$store.state.isAuth) {
			this.$router.push({ name: "SignIn" });
			return;
		}
		this.permission = true;

		this.address = localStorage.getItem("wallet_address");
		if (!this.address) {
			getUserWallet().then((address) => {
				if (address) {
					this.address = address;
					this.updateClaimedDividends();
				}
				this.updateBalance(address);
			});
		} else {
			this.updateClaimedDividends();
			this.updateBalance(this.address);
		}
	},
	data() {
		return {
			timeoutId: null,
			permission: false,
			address: "",
			isWithdrawModalOpen: false,
			amount: 0,
			objects: [],
		};
	},
	methods: {
		numberFormat(number) {
			return new Intl.NumberFormat("en-EN").format(number);
		},
		async updateClaimedDividends() {
			if (this.address) {
				const amount = await getClaimableAmount(this.address);
				this.amount = amount / 1_000_000;
			}
			this.timeoutId = setTimeout(() => {
				this.updateClaimedDividends();
			}, 10000);
		},
		getFlag(country) {
			return new URL(`../assets/images/${country}.webp`, import.meta.url)
				.href;
		},
		async withdraw() {
			const amount = this.amount;
			const res = await claimDividends(wa);
			if (res) {
				this.$notify({
					title: "Dividend notices",
					text: `<span>+${amount} $</span><date>${new Date().toLocaleDateString()}</date>`,
					duration: 35000,
					pauseOnHover: true,
					closeOnClick: false,
				});
			} else {
				this.$notify({
					title: "Error",
					text: `<span>Something went wrong. Reload page and try again</span><date>${new Date().toLocaleDateString()}</date>`,
					duration: 5000,
					pauseOnHover: true,
					closeOnClick: false,
				});
			}
			// this.isWithdrawModalOpen = true;
		},
		async claim() {
			const wa = localStorage.getItem("wallet_address");
			if (wa) {
				this.withdraw();
				return;
			}
			const res = await claimProfitWithCreds();
			if (!res) {
				this.$notify({
					title: "Error",
					text: `<span>Something went wrong. Reload page and try again</span><date>${new Date().toLocaleDateString()}</date>`,
					duration: 5000,
					pauseOnHover: true,
					closeOnClick: false,
				});
				return;
			}
			this.updateBalance(this.address);
			this.$notify({
				title: "Dividend notices",
				text: `<span>+${res} $</span><date>${new Date().toLocaleDateString()}</date>`,
				duration: 35000,
				pauseOnHover: true,
				closeOnClick: false,
			});
		},
		updateBalance(address) {
			getUSDTBalance(address).then((balance) => {
				this.$store.commit("updateBalance", balance);
			});
		},
	},
	created() {
		getObjects().then((res) => {
			if (res.objects?.length) {
				this.objects = res.objects;
			}
		});
	},
	beforeUnmount() {
		clearTimeout(this.timeoutId);
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.card {
	.claim__wrapper {
		@media screen and (max-width: 528px) {
			flex-wrap: wrap;
			margin-top: 1rem !important;
			justify-content: center;
			text-align: center;
			gap: 1rem;
		}
	}
	.dividends {
		flex-grow: 1;
	}
	.card-body {
		height: 263px;
		@media screen and (max-width: $small) {
			height: auto;
		}
		& > img {
			border-radius: 8px;
			max-height: 100%;
			width: 405px;
			height: 100%;
			object-fit: cover;
			@media screen and (max-width: $small) {
				width: 100%;
				height: 161px;
			}
		}
		.investor-row {
			width: calc(100% - 405px);
			height: 263px;
			vertical-align: top;
			@media screen and (max-width: $small) {
				width: 100%;
				height: auto;
			}
		}
		.icon-box {
			width: 42px;
			height: 43px;
			background: var(--light-main);
			border-radius: 8px;
			span {
				height: 27px;
			}
		}
		h5 {
			font-family: Roboto, sans-serif;
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 100%;
			color: #333333;
			@media screen and (max-width: $small) {
				vertical-align: text-bottom;
			}
		}
		p.description {
			font-family: Roboto, sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: 12px;
			line-height: 100%;
			color: #969696;
		}
		.flag-icon {
			display: flex;
			height: 40px;
			cursor: default !important;
			@media screen and (max-width: $small) {
				height: 18px;
				vertical-align: super;
			}
		}
		.feature {
			font-style: normal;
			line-height: 100%;
			margin-left: auto;
			@media screen and (max-width: $small) {
				margin-left: 0;
				width: 50%;
			}
			span {
				font-family: Roboto, sans-serif;
				font-weight: 400;
				font-size: 16px;
				color: var(--text);
			}
			p {
				font-family: ArticulatCF, sans-serif;
				font-weight: 700;
				font-size: 20px;
				color: #1a1e2c;
			}
		}
		hr {
			width: 100%;
			border-color: #cbc9c9;
		}
		button {
			width: 188px;
			padding: 15px 0;
			@media screen and (max-width: $small) {
				width: calc(50% - 5px);
			}
			&:disabled {
				cursor: default;
				color: #c8c8c8;
				border: 1px solid #c8c8c8;
			}
			&:last-child {
				float: right;
			}
		}
		.flex-flow-wrap {
			flex-flow: wrap;
		}
		.investor-title {
			position: relative;
			& > h5 {
				width: calc(100% - 35px);
			}
			.listings__card-flag {
				position: absolute;
				right: 0;
				top: 0;
			}
			@media screen and (max-width: $small) {
				width: calc(100% - 80px);
			}
		}
	}
	.investors__card {
		@media screen and (max-width: $small) {
			padding: 20px !important;
		}
	}
}
</style>

<style lang="scss">
.ellipse.top {
	display: none;
}
.main-bg {
	background: url("@/assets/images/main_bg2.png") center;
}
</style>
