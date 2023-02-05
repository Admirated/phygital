<template>
	<div class="row m-0 mt-lg-5 d-flex justify-content-center">
		<div class="col-12 col-lg-10 p-0">
			<div class="card border-0">
				<div class="card-body">
					<div class="row m-0">
						<div class="col-12 col-lg-6 p-0 px-2 px-lg-0">
							<div class="d-flex align-items-center">
								<h3 class="pe-1" v-text="object.area"></h3>
								<UIIcon class="flag-icon ps-2" :path="object.country" />
							</div>
							<p
								class="description pe-0 pe-lg-5"
								v-text="object.description"
							></p>
							<p class="status">
								<span
									v-text="object.isActive ? 'Active' : 'Ended'"
								></span>
								| Published on
								<span
									v-text="
										new Date(
											object.published * 1000
										).toLocaleDateString()
									"
								></span>
								<span
									v-text="
										`&nbsp;${getDaysByDeadline(
											object.published
										)} days ago`
									"
									class="d-inline-block"
								></span>
							</p>
						</div>
						<div class="col-12 col-lg-6 p-0 ps-0 ps-lg-3 mt-3 mt-lg-0">
							<div class="card border-0 info-card">
								<div class="card-body">
									<div
										class="price mb-2 pb-1"
										v-html="priceText"
									></div>
									<ProgressBar
										:percent="(object.invested / object.total) * 100"
									/>
									<div
										class="investor-counter mt-2 pt-1"
										v-text="investorCounter"
									></div>
									<div class="currency-list mt-4">
										<span>Accepted currencies:</span>
										<div class="d-flex mt-1">
											<div
												class="currency p-2"
												v-for="currency in currencies"
												:key="currency"
												:class="{
													selected: currency === selectedCurrency,
												}"
												@click="selectCurrency(currency)"
												v-text="currency"
											></div>
										</div>
										<button
											class="ui-btn btn-outline color-black mt-4 w-100 mb-5"
											@click="invest"
										>
											Invest
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row m-0">
						<div class="col-12 separator p-0">
							<span class="d-inline-block">Overview</span>
							<hr class="d-inline-block" />
						</div>
					</div>
					<div class="row m-0 mt-4 mt-lg-5 p-0">
						<div
							class="col-6 col-lg-3 feature p-0"
							v-for="feature in features"
							:key="feature.text"
						>
							<div class="row m-0 mb-4 mb-lg-0">
								<div class="col-3 p-0 pb-2 pb-lg-0">
									<span
										class="icon"
										:style="
											'background-image: url(\'/src/assets/images/icons/' +
											feature.icon +
											'.svg\')'
										"
									></span>
								</div>
								<div class="col-9 p-0 ps-3 ps-lg-2">
									<h5 class="mb-0 mb-lg-1" v-text="feature.title"></h5>
									<span v-text="feature.text"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="row m-0 mt-3 mt-lg-5">
						<div class="col-12 p-0 photo-row">
							<img :src="object.img" />
						</div>
					</div>
					<div class="row m-0 mt-4">
						<div class="col-12 p-0 info-row">
							<span class="d-block" v-text="object.title"></span>
							<p class="pe-3 pe-lg-4" v-text="object.info"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProgressBar from "../components/ProgressBar.vue";
import { getObjectById } from "@/api/objects";
export default {
	components: {
		ProgressBar,
	},
	data() {
		return {
			object: {},
			selectedCurrency: null,
			currencies: ["USD", "BTC", "USDC"],
			features: [
				{
					icon: "PropertyType",
					title: "Property type",
					text: "Condo",
				},
				{
					icon: "PropertySize",
					title: "Property size",
					text: "3853 ft²",
				},
				{
					icon: "Bedroom",
					title: "Bedrooms",
					text: "3",
				},
				{
					icon: "Bathroom",
					title: "Bathrooms",
					text: "3.5",
				},
			],
		};
	},
	created() {
		const id = this.$route.params.id;
		getObjectById(id).then((res) => {
			if (res.id) {
				this.object = res;
			}
		});
	},
	computed: {
		priceText() {
			return (
				this.numberFormat(this.object.invested) +
				" " +
				"€" +
				" <span>/ " +
				this.numberFormat(this.object.total) +
				" " +
				"€" +
				"</span>" +
				' <span class="percent ps-2">(' +
				this.numberFormat(
					(this.object.invested / this.object.total) * 100
				) +
				"%)</span>" +
				' <span class="date float-end">' +
				this.getDaysByDeadline(this.object.deadline) +
				" days left</span>"
			);
		},
		investorCounter() {
			return this.object.investors + " Investors";
		},
	},
	mounted() {
		setTimeout(() => {
			this.$notify({
				title: "Dividend notices",
				text: "<span>+2,000.000</span> User Jane Aniston <date>12.12.2023</date>",
				duration: 5000,
				pauseOnHover: true,
				closeOnClick: false,
			});
		}, 2000);

		setTimeout(() => {
			this.$notify({
				title: "Dividend notices",
				text: "<span>+2,000.000</span> User Jane Aniston <date>12.12.2023</date>",
				duration: 5000,
				pauseOnHover: true,
				closeOnClick: false,
			});
		}, 4000);
	},
	methods: {
		selectCurrency(currency) {
			this.selectedCurrency = currency;
		},
		numberFormat(number) {
			return new Intl.NumberFormat("en-EN").format(number);
		},
		invest() {
			if (this.$store.state.isAuth) {
				this.$router.push({ name: "Investors" });
				return;
			}
			this.$router.push({ name: "SignUp" });
		},
		getDaysByDeadline(deadline) {
			const dateNow = Math.floor(Date.now() / 1000);
			if (deadline - dateNow <= 0) {
				return 0;
			}

			return Math.floor((deadline - dateNow) / 86400);
		},
	},
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

p {
	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: 400;
	&.description {
		font-size: 16px;
		line-height: 137%;
		color: var(--text);
	}
	&.status {
		font-size: 14px;
		line-height: 20px;
		color: var(--black);
	}
}
.flag-icon {
	height: 26px;
	cursor: default !important;
	svg {
		vertical-align: baseline;
	}
}
.info-card {
	top: -100px;
	position: relative;
	border-radius: 6px !important;
	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 100%;
	color: var(--black);
	margin-bottom: -50px;
	@media screen and (max-width: $small) {
		top: 0;
		width: 100%;
		margin-bottom: 45px;
	}
	.card-body {
		padding: 57px 54px !important;
		box-shadow: 0 11px 37px rgba(0, 0, 0, 0.08);
		@media screen and (max-width: $small) {
			padding: 15px 11px 54px !important;
		}
		&:after {
			background-image: url("@/assets/images/building-info.png");
			background-size: cover;
			content: "";
			height: 54px;
			width: calc(100% - 15px);
			position: absolute;
			left: 0;
			bottom: 7px;
			margin: 0 7px;
			border-radius: 4px;
			@media screen and (max-width: $small) {
				height: 64px;
			}
		}
	}
	.price {
		color: var(--black);
		span {
			color: var(--main);
			&.percent {
				font-size: 12px;
				color: var(--black);
				vertical-align: top;
			}
			&.date {
				font-size: 12px;
				vertical-align: top;
				color: var(--black);
			}
		}
	}
	.currency-list {
		font-size: 13px;
		line-height: 20px;
		color: var(--black);
		.currency {
			font-size: 11px;
			line-height: 11px;
			border-radius: 4px;
			border: 1px solid var(--white);
			cursor: pointer;
			&.selected {
				border: 1px solid var(--black);
			}
		}
	}
}
.separator {
	span {
		font-family: Articulat, sans-serif;
		font-weight: 700;
		font-size: 24px;
		color: var(--black);
		width: 120px;
		line-height: 33px;
		@media screen and (max-width: $small) {
			width: 125px;
		}
	}
	hr {
		width: calc(100% - 120px);
		border-color: #dfdfdf;
		vertical-align: bottom;
		@media screen and (max-width: $small) {
			width: calc(100% - 125px);
		}
	}
}
.feature {
	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 137%;
	color: #252d30;
	.icon {
		width: 55px;
		height: 45px;
		display: inline-block;
		cursor: default !important;
		background-size: cover;
		@media screen and (max-width: $small) {
			width: 42px;
			height: 35px;
		}
	}
	h5 {
		font-weight: 400;
		font-size: 16px;
		color: #9ba1a4;
	}
}
.photo-row {
	img {
		width: 80%;
		border-radius: 7.6px;
		@media screen and (max-width: $small) {
			width: 100%;
		}
	}
}
.info-row {
	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 137%;
	span {
		font-weight: 400;
		font-size: 16px;
		line-height: 137%;
		color: var(--black);
		margin-bottom: 10px;
	}
	p {
		color: var(--text);
	}
}
</style>
