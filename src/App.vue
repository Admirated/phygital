<template>
	<Header />
	<div class="main-bg"></div>
	<div class="page">
		<RouterView />
	</div>
	<div class="ellipse top"></div>
	<div class="ellipse bottom"></div>
	<Footer />
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	@import "assets/scss/_variables.scss";

	.main-bg {
		max-width: 1440px;
		width: 100%;
		height: 177px;
		margin: 0 auto;
		background: url("@/assets/images/main-bg.png") center;
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
	}

	.ellipse {
		position: absolute;
		background: #27D3DD;
		filter: blur(150px);
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
		}
	}
</style>
