<template>
	<div
		class="row m-0 mt-lg-5 d-block d-lg-flex justify-content-center"
		v-if="permission"
	>
		<div class="col-12 col-lg-11 p-0 mb-4 mb-lg-0">
			<h2 class="page__title"><span>Investors</span> view</h2>
		</div>
		<div class="col-12 col-lg-11 p-0" v-for="investor in investors">
			<div class="card border-0 mb-5 pb-3 mb-lg-4 pb-lg-0">
				<div class="card-body p-0 px-4 px-lg-0">
					<img class="d-inline-block" :src="investor.image" />
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
									v-text="investor.title"
								></h5>
								<UIIcon
									class="flag-icon ps-3 d-inline-block d-lg-none"
									:path="'Flag_' + investor.country_code"
								/>
								<p
									class="description mb-0 pt-0 pt-lg-1"
									v-text="investor.description"
								></p>
							</div>
							<UIIcon
								class="flag-icon ps-3 mt-3 d-none d-lg-flex"
								:path="'Flag_' + investor.country_code"
							/>
							<div class="feature mt-4 mt-lg-0">
								<span>Funding target</span>
								<p
									class="mb-0 mt-2"
									v-text="
										numberFormat(investor.price) +
										' ' +
										investor.currency
									"
								></p>
							</div>
							<div class="feature mt-4 mt-lg-0">
								<span>Investment term</span>
								<p class="mb-0 mt-2" v-text="investor.term"></p>
							</div>
							<div class="feature mt-4 mt-lg-0">
								<span>Est. annual return</span>
								<p
									class="mb-0 mt-2"
									v-text="investor.percent + '%'"
								></p>
							</div>
						</div>
						<hr />
						<InvestorCalendar month="3" />
						<div class="col-12 p-0 mt-4 pt-1">
							<button
								class="ui-btn btn-outline color-black"
								@click="this.$router.push({ name: 'Notifications' })"
							>
								View
							</button>
							<button
								class="ui-btn btn-outline color-black ms-0 ms-lg-3"
								disabled
							>
								Withdraw profit
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

export default {
	components: {
		InvestorCalendar,
	},
	created() {
		if (!this.$store.state.isAuth) {
			this.$router.push({ name: "SignIn" });
			return;
		}
		this.permission = true;
	},
	data() {
		return {
			permission: false,
			investors: [
				{
					image: "/src/assets/images/investors1.png",
					title: "Plaza de Nadal",
					description: "Barcelona | 1 building",
					country_code: "es",
					price: 363000,
					currency: "€",
					term: "4 years",
					percent: 7.09,
				},
				{
					image: "/src/assets/images/investors2.png",
					title: "Plaza de Nadal",
					description: "Barcelona | 1 building",
					country_code: "es",
					price: 363000,
					currency: "€",
					term: "4 years",
					percent: 7.09,
				},
				{
					image: "/src/assets/images/investors3.png",
					title: "Plaza de Nadal",
					description: "Barcelona | 1 building",
					country_code: "es",
					price: 363000,
					currency: "€",
					term: "4 years",
					percent: 7.09,
				},
			],
		};
	},
	methods: {
		numberFormat(number) {
			return new Intl.NumberFormat("en-EN").format(number);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.card {
	.card-body {
		height: 263px;
		@media screen and (max-width: $small) {
			height: auto;
		}
		img {
			border-radius: 8px;
			max-height: 100%;
			width: 405px;
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
			@media screen and (max-width: $small) {
				width: calc(100% - 80px);
			}
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
