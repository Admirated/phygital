<template>
	<Header />
	<div class="main-bg">
		<img src="@/assets/images/main-bg.png" alt="" />
	</div>
	<RouterView />
	<Footer />
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-bg {
	max-width: 1440px;
	width: 100%;
	height: 177px;
	margin: 0 auto;
	img {
		height: 100%;
		width: 100%;
	}
}
@media screen and (max-width: 528px) {
	.main-bg {
		background-size: cover;
	}
}
</style>
