<template>
	<Header />
	<!-- <notifications width="476px" v-if="windowWidth >= notifyMinWidth" /> -->
	<div class="main-bg"></div>
	<div class="page">
		<RouterView />
	</div>
	<div class="ellipse top"></div>
	<div class="ellipse bottom"></div>
	<Footer />
</template>

<script>
import { getUserInfo } from "@/api/user";
export default {
	data() {
		return {
			windowWidth: 0,
			notifyMinWidth: 992,
		};
	},
	created() {
		if (localStorage.getItem("wallet_address")) {
			this.$store.commit("authenticate");
			return;
		}
		getUserInfo()
			.then((res) => {
				if (res.id) {
					this.$store.commit("authenticate");
				}
			})
			.catch((e) => console.log(e));
	},
	mounted() {
		this.windowWidth = window.innerWidth;
	},
};
</script>

<style lang="scss">
@import "assets/scss/_variables.scss";

.main-bg {
	max-width: 1440px;
	width: 100%;
	height: 177px;
	margin: 0 auto;
	background: url("@/assets/images/main_bg.png") center;
	background-size: cover;
	position: absolute;
	z-index: 1;
	left: 0;
	right: 0;
	@media screen and (max-width: $small) {
		height: 115px;
	}
}

.page {
	padding-top: 88px;
	z-index: 2;
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: 1440px;
	@media screen and (max-width: $small) {
		padding-top: 115px;
	}
	&__title {
		font-family: ArticulatCF, sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 33px;
		line-height: 100%;
		text-transform: uppercase;
		color: var(--white);
		position: absolute;
		margin-top: -86px;
		@media screen and (max-width: $small) {
			font-size: 28px;
			padding: 0 20px;
			margin-top: -96px;
		}
		span {
			font-weight: 900;
		}
	}
}

.ellipse {
	position: absolute;
	background: #27d3dd;
	filter: blur(150px);
	@media screen and (max-width: $small) {
		filter: blur(80px);
	}
	&.top {
		width: 172px;
		height: 143px;
		left: 35%;
		top: 396px;
		@media screen and (max-width: $small) {
			display: none;
		}
	}
	&.bottom {
		width: 332px;
		height: 173px;
		left: 100%;
		top: 100%;
		margin: -50px 0px 0px -230px;
		@media screen and (max-width: $small) {
			width: 200px;
			height: 100px;
			margin: -70px 0px 0px -110px;
		}
	}
}

.vue-notification-group {
	top: 75px !important;
	right: 54px !important;
	.vue-notification-wrapper {
		overflow: visible;
		margin: 0 0 12px 0;
	}
	.vue-notification-template {
		background-color: #ffffff;
		padding: 25px 29px;
		border-left: none;
		border-radius: 6px;
		filter: drop-shadow(0px 9px 24px rgba(12, 48, 75, 0.44));
		font-family: Roboto, sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 137%;
		&:before {
			content: "";
			background-image: url("@/assets/images/icons/Close.svg");
			background-size: 100%;
			display: inline-block;
			width: 10px;
			height: 10px;
			position: absolute;
			top: 10px;
			right: 8px;
			cursor: pointer;
		}
		.notification-title {
			font-weight: 500;
			color: var(--black);
		}
		.notification-content {
			padding-top: 10px;
			color: var(--text);
			display: flex;
			span {
				font-family: ArticulatCF, sans-serif;
				font-style: normal;
				font-weight: 900;
				font-size: 20px;
				line-height: 100%;
				text-transform: uppercase;
				color: var(--main);
				padding-right: 17px;
			}
			date {
				font-weight: 500;
				color: var(--black);
				margin-left: auto;
				margin-top: -16px;
			}
		}
	}
}
</style>
