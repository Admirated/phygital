<template>
	<header>
		<div class="header__container">
			<div class="header__logo">
				<RouterLink :to="{ name: 'Home' }" class="d-inline-block">
					<UIIcon path="Logo" />
				</RouterLink>
			</div>
			<nav class="header__navigation d-none d-lg-flex">
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
			<div class="header__buttons d-none d-lg-flex">
                <RouterLink to="sign-up">
                    <button class="btn btn-outline color-black">Sign Up</button>
                </RouterLink>
                <RouterLink to="sign-in">
                    <button class="btn btn-outline color-main">Sign In</button>
                </RouterLink>
			</div>
			<UIIcon path="MobileMenu" class="d-flex d-lg-none" />
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

<style lang="scss" scoped>
	@import "../assets/scss/_variables.scss";

    .header {
        &__container {
            margin: 0 auto;
            width: 100%;
            padding: 16px 16px 16px 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
		&__logo {
			width: 270px;
		}
        &__buttons {
            display: flex;
            gap: 12px;
            align-items: center;
            .color-main {
                color: var(--white);
				&:hover {
					color: var(--black);
				}
            }
            button {
                height: 48px;
                width: 129px;
                border-radius: 10px;
				@media screen and (max-width: $medium) {
					width: 110px;
				}
            }
        }
    }

	.navigation {
		display: flex;
		align-items: center;
		gap: 48px;
		@media screen and (max-width: $medium) {
			gap: 24px;
		}
		&__item {
			font-family: Roboto, sans-serif;
			font-size: 16px;
			font-weight: 400;
			line-height: 16px;
			letter-spacing: 0em;
			a {
				color: var(--black);
				text-decoration: none;
				&:hover {
					color: var(--black);
					text-decoration: underline;
				}
			}
		}
	}
</style>
