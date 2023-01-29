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
				<button
					class="btn btn-outline color-black"
					@click="$router.push({ name: 'SignUp' })"
				>
					Sign Up
				</button>
				<button
					class="btn btn-outline color-main"
					@click="$router.push({ name: 'SignIn' })"
				>
					Sign In
				</button>
			</div>
			<span class="header__burger">
				<span></span><span></span><span></span
			></span>
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
		top: 0;
		left: 0;
		right: 0;
		z-index: 99999;
		&__container {
			margin: 0 auto;
			width: 100%;
			max-width: 1440px;
			padding: 16px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__burger {
			display: none;
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
	@media screen and (max-width: 528px) {
		.header {
			&__navigation,
			&__buttons {
				display: none;
			}
			&__container {
				padding: 20px 28px 10px;
			}
			&__burger {
				display: block;
				position: relative;
				width: 30px;
				height: 24px;
				bottom: 4px;
				span {
					display: block;
					position: absolute;
					transform: rotate(0deg);
					width: 100%;
					height: 1.8px;
					background-color: var(--main);
					border-radius: 9px;
					transition: 0.25s ease-in-out;
				}
				span:nth-child(1) {
					top: 0px;
				}
				span:nth-child(2) {
					bottom: 10px;
				}
				span:nth-child(3) {
					bottom: 0px;
				}
				&._active {
					span:nth-child(1) {
						transform: rotate(-45deg);
						top: 9px;
					}
					span:nth-child(3) {
						transform: rotate(45deg);
						bottom: 9px;
					}
					span:nth-child(2) {
						display: none;
					}
				}
			}
		}
	}
</style>
