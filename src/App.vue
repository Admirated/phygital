<template>
	<Header />
	<div class="main-bg">
		<img src="@/assets/images/main-bg.png" alt="" />
	</div>
	<RouterView />
</template>

<script>
export default {};
</script>

<style>
.main-bg {
	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
}
</style>
