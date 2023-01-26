<template>
	<header class="header">
		<div class="header__container">
			<div class="header__logo">
				<RouterLink :to="{ name: 'Home' }">
					<UIIcon path="Logo" />
				</RouterLink>
			</div>
			<nav class="header__navigation">
				<ul class="navigation">
					<li
						class="navigation__item"
						v-for="link in links"
						:key="link.path"
					>
						<RouterLink :to="{ path: link.path }">{{
							link.title
						}}</RouterLink>
					</li>
				</ul>
			</nav>
			<div class="header__buttons">
				<button class="btn btn-outline color-black">Sign Up</button>
				<button class="btn btn-outline color-main">Sign In</button>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					title: "Listings",
					path: "listings",
				},
				{
					title: "About",
					path: "about",
				},
				{
					title: "How It Works",
					path: "FAQ",
				},
				{
					title: "Services",
					path: "services",
				},
			],
		};
	},
};
</script>

<style lang="scss">
.header {
	background-color: white;
	height: 80px;
	position: sticky;
	z-index: 99999;
	top: 0;
	&__container {
		margin: 0 auto;
		width: 100%;
		max-width: 1440px;
		padding: 16px;
		padding-left: 6px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__logo {
	}
	&__navigation {
	}
	&__buttons {
		display: flex;
		gap: 12px;
		align-items: center;
	}
}
.navigation {
	display: flex;
	align-items: center;
	gap: 48px;
	&__item a {
		font-family: Roboto, sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0em;
		color: var(--black);
	}
}
</style>
