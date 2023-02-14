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
			<div class="header__buttons" v-if="!this.$store.state.isAuth">
				<button
					class="ui-btn btn-outline color-black"
					@click="$router.push({ name: 'SignUp' })"
				>
					Sign Up
				</button>
				<button
					class="ui-btn btn-outline color-main"
					@click="$router.push({ name: 'SignIn' })"
				>
					Sign In
				</button>
			</div>
			<div class="header__buttons" v-if="this.$store.state.isAuth">
				<span
					class="profile"
					@click="isProfileDropdownOpen = !isProfileDropdownOpen"
				>
					<UIIcon path="profile" />
				</span>
				<div class="menu__dropdown" v-if="isProfileDropdownOpen">
					<div class="menu__dropdown-item">
						<div class="balance">
							<span>Balance: {{ this.$store.state.balance }}</span
							>USDT
							<span class="balance__icon"><UIIcon path="tether" /></span>
						</div>
					</div>
					<div
						class="menu__dropdown-item"
						@click="isProfileDropdownOpen = false"
					>
						<RouterLink :to="{ name: 'Investors' }"
							>Investments</RouterLink
						>
					</div>
					<div class="menu__dropdown-item" @click="logout">
						<p>Logout</p>
					</div>
					<div
						class="menu__dropdown-item"
						@click="exportSeed"
						v-if="userCredsAddress"
					>
						<p class="export">Export seed phrase</p>
					</div>
				</div>
			</div>
			<span class="header__burger" @click="isOpen = true">
				<span></span><span></span><span></span
			></span>
		</div>
	</header>

	<div class="burger__menu" v-if="isOpen">
		<div class="burger__menu-head">
			<div class="header__logo" @click="isOpen = false">
				<RouterLink :to="{ name: 'Home' }">
					<UIIcon path="Logo" />
				</RouterLink>
			</div>
			<div class="burger__menu-close" @click="isOpen = false">
				<UIIcon path="burger_close" />
			</div>
		</div>

		<div
			class="burger__menu-buttons mb-4 d-flex"
			v-if="this.$store.state.isAuth"
		>
			<span class="profile me-3">
				<UIIcon path="profile" />
			</span>
			<div class="balance d-flex mt-2">
				<span class="">Balance: {{ this.$store.state.balance }}</span
				>USDT
				<span class="balance__icon"><UIIcon path="tether" /></span>
			</div>
		</div>

		<div class="burger__menu-buttons" v-if="!this.$store.state.isAuth">
			<button
				class="ui-btn btn-outline color-black"
				@click="
					isOpen = false;
					$router.push({ name: 'SignUp' });
				"
			>
				Sign Up
			</button>

			<button
				class="ui-btn btn-outline color-main"
				@click="
					isOpen = false;
					$router.push({ name: 'SignIn' });
				"
			>
				Sign In
			</button>
		</div>

		<ul class="burger__navigation">
			<li
				class="burger__navigation-item"
				v-for="link in links"
				:key="link.path"
			>
				<RouterLink @click="isOpen = false" :to="{ path: link.path }">{{
					link.title
				}}</RouterLink>
				<span class="burger__navigation-active"></span>
			</li>
		</ul>
		<div
			class="burger__profile-actions mt-5 pt-2"
			v-if="$store.getters.getAuthFlag"
		>
			<div class="menu__dropdown-item" @click="isOpen = false">
				<RouterLink :to="{ name: 'Investors' }">Investments</RouterLink>
			</div>
			<div class="menu__dropdown-item" @click="logout">
				<p>Logout</p>
			</div>
			<div
				class="menu__dropdown-item"
				@click="exportSeed"
				v-if="userCredsAddress"
			>
				<p class="export">Export seed phrase</p>
			</div>
		</div>
	</div>
</template>

<script>
import { disconnect } from "@/api/wallet";

export default {
	data() {
		return {
			isOpen: false,
			isProfileDropdownOpen: false,
			links: [
				{
					title: "Listings",
					path: "/object/1",
					name: "Building",
				},
				{
					title: "About",
					path: "/about",
					name: "About",
				},
				{
					title: "How It Works",
					path: "/FAQ",
					name: "FAQ",
				},
			],
		};
	},
	methods: {
		async logout() {
			localStorage.removeItem("_token");
			if (localStorage.getItem("wallet_address")) {
				localStorage.removeItem("wallet_address");
				disconnect();
			}
			this.$router.go(this.$router.currentRoute);
		},
		exportSeed() {
			this.isProfileDropdownOpen = false;
			this.isOpen = false;
			this.$router.push({
				name: "Thanks",
			});
		},
	},
	computed: {
		userCredsAddress() {
			return this.$store.state.walletAddress;
		},
	},
};
</script>

<style lang="scss">
.balance {
	display: flex;
	gap: 4px;
	font-family: ArticulatCF, sans-serif;
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 0.5px;
	color: #9c6fe4;
	&__icon {
		width: 18px;
		height: 18px;
		position: relative;
		bottom: 1px;
		flex-shrink: 0;
	}
}

.header {
	background-color: white;
	height: 80px;
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	z-index: 88;

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
		position: relative;
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
.menu {
	&__dropdown {
		position: absolute;
		top: calc(100% + 12px);
		right: -16px;
		box-shadow: 1px 4px 10px 0px #c279e952;
		width: 220px;
		background: #fff;
		padding: 12px 16px 6px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}
	&__dropdown-item {
		margin-bottom: 12px;
		font-family: Roboto, sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 21px;
		p {
			cursor: pointer;
		}
	}
}
.export {
	color: var(--bs-orange);
}

.burger__menu {
	inset: 0;
	width: 100vw;
	background-color: #fff;
	z-index: 90;
	position: fixed;
	display: none;
	padding: 18px 26px;
	&::before {
		content: "";
		width: 332px;
		height: 155px;
		position: absolute;
		background: var(--main);
		filter: blur(150px);
		right: -80px;
		bottom: -200px;
	}
}
@media screen and (max-width: 528px) {
	.menu {
		&__dropdown {
			display: none;
		}
	}
	.burger {
		&__profile-actions {
			border-top: 1px solid var(--bs-gray-400);
		}
		&__menu {
			display: block;
			&-head {
				display: flex;
				justify-content: space-between;
				margin-bottom: 38px;
			}
			.menu__dropdown-item {
				margin-top: 25px;
			}
		}
		&__menu-close {
			width: 30px;
			height: 30px;
		}
		&__menu-buttons {
			button {
				width: 100%;
				margin-bottom: 14px;
				&:last-child {
					margin-bottom: 38px;
				}
			}
		}
		&__navigation {
			display: flex;
			flex-direction: column;
			gap: 30px;
			&-item {
				display: flex;
				gap: 9px;
				align-items: center;
				flex-direction: row-reverse;
				justify-content: flex-end;
			}
			&-active {
				width: 30px;
				height: 6px;
				background: var(--main);
				display: none;
				border-radius: 25px;
			}
			a.router-link-active {
				color: var(--main);
				& ~ span {
					display: block;
				}
			}
		}
	}

	.header {
		&__navigation,
		&__buttons {
			display: none;
		}
		&__container {
			padding: 18px 26px 10px;
		}
		&__burger {
			display: block;
			position: relative;
			width: 30px;
			height: 25px;

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
				bottom: 11px;
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
