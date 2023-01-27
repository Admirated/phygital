<template>
	<main class="page">
		<section class="home">
			<div class="home__block">
				<div>
					<h1 class="title">
						Real Estate accessible
						<span class="title-thin">for all.</span>
					</h1>
					<p class="subtitle">
						Build your Real Estate Portfolio. Meet phygital real estate, a
						simple, secure real estate investment platform who joins
						developers, whales and crypto investors.
					</p>
				</div>
				<div class="home__gradient">
					<div class="home__gradient-item">
						<p>No illusion. Just invest</p>
						<div>
							<img src="@/assets/images/machine.png" alt="" />
						</div>
					</div>
					<div class="home__gradient-item">
						<p>Try it with us</p>
						<div>
							<img src="@/assets/images/circle.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div class="home__block cards">
				<div class="home__block-card-wrapper">
					<div class="home__block-card">
						<h3 class="title">Offer to Investors</h3>
						<p class="subtitle-black">
							<span class="subtitle-black-big">8-15% </span>annual
						</p>
						<p class="subtitle">
							8-15% annual, проверенные застройщики и объекты в разных
							странах, реальные права собственности на площадь обьекта от
							0,1 м2 , качественная аналитика недвижимости
						</p>
					</div>
					<div class="home__block-card-image">
						<img src="@/assets/images/wave_gradient.png" alt="" />
					</div>
				</div>
				<div class="home__block-card-wrapper">
					<div class="home__block-card">
						<h3 class="title">Offer to Developers</h3>
						<p class="subtitle-black">
							<span class="subtitle-black-big">8-15% </span>annual
						</p>
						<p class="subtitle">
							quick collection of investments for objects, qualitative
							analytics preferred by investors
						</p>
					</div>
					<div class="home__block-card-image">
						<img src="@/assets/images/long_spring.png" alt="" />
					</div>
				</div>
			</div>
			<section class="page__area listings">
				<div class="page__area-title">
					<h3 class="subtitle-black-big">Featured listings</h3>
					<div class="page__area-line"></div>
				</div>
				<div class="listings__cards">
					<div class="listings__card">
						<div class="listings__card-image">
							<img src="@/assets/images/listings_card1.png" alt="" />
						</div>
						<div class="listings__card-body">
							<div class="listings__card-title">
								<div class="listings__card-icon">
									<img
										src="@/assets/images/listings_build.png"
										alt=""
									/>
								</div>
								<div class="listings__card-name">
									<p>Plaza de Nadal</p>
									<span>Barcelona | 1 building</span>
								</div>
								<div class="listings__card-flag">
									<img
										src="@/assets/images/listings_flag.png"
										alt=""
									/>
								</div>
							</div>
							<div class="listings__card-invest">
								<div class="listings__card-invest-head">
									<p>
										365,564 € <span class="total">/ 680,000 €</span
										><span class="percent">(53.76%)</span>
									</p>
									<span class="deadline">26 days left</span>
								</div>
								<div class="listings__card-invest-bar">
									<div></div>
								</div>
								<p class="invest-count">364 investors</p>
							</div>
							<div class="listings__card-actions">
								<UIIcon path="AA" iconClass="listings__card-action" />
								<UIIcon path="Lock" iconClass="listings__card-action" />
								<UIIcon path="Hand" iconClass="listings__card-action" />
								<UIIcon
									path="Comments"
									iconClass="listings__card-action"
								/>
								<UIIcon path="Info" iconClass="listings__card-action" />
							</div>
							<div class="listings__card-info">
								<div class="listings__card-info-item">
									<p>Term</p>
									<p>Month</p>
								</div>
								<div class="listings__card-info-item">
									<p>Type</p>
									<p>Development loan</p>
								</div>
								<div class="listings__card-info-item">
									<p>LTV</p>
									<p>59.41 %</p>
								</div>
								<div class="listings__card-info-item">
									<p>Annual yield</p>
									<p>9.00 %</p>
								</div>
								<div class="listings__card-info-item">
									<p>Total yield</p>
									<p>13.50 %</p>
								</div>
							</div>
							<button class="btn btn-outline color-black">Invest</button>
							<p class="subtitle overview">Overview</p>
						</div>
					</div>
					<div class="listings__card">
						<div class="listings__card-image">
							<img src="@/assets/images/listings_card2.png" alt="" />
						</div>
						<div class="listings__card-body">
							<div class="listings__card-title">
								<div class="listings__card-icon">
									<img
										src="@/assets/images/listings_build.png"
										alt=""
									/>
								</div>
								<div class="listings__card-name">
									<p>Plaza de Nadal</p>
									<span>Barcelona | 1 building</span>
								</div>
								<div class="listings__card-flag">
									<img
										src="@/assets/images/listings_flag.png"
										alt=""
									/>
								</div>
							</div>
							<div class="listings__card-invest">
								<div class="listings__card-invest-head">
									<p>
										365,564 € <span class="total">/ 680,000 €</span
										><span class="percent">(53.76%)</span>
									</p>
									<span class="deadline">26 days left</span>
								</div>
								<div class="listings__card-invest-bar">
									<div></div>
								</div>
								<p class="invest-count">364 investors</p>
							</div>
							<div class="listings__card-actions">
								<UIIcon path="AA" iconClass="listings__card-action" />
								<UIIcon path="Lock" iconClass="listings__card-action" />
								<UIIcon path="Hand" iconClass="listings__card-action" />
								<UIIcon
									path="Comments"
									iconClass="listings__card-action"
								/>
								<UIIcon path="Info" iconClass="listings__card-action" />
							</div>
							<div class="listings__card-info">
								<div class="listings__card-info-item">
									<p>Term</p>
									<p>Month</p>
								</div>
								<div class="listings__card-info-item">
									<p>Type</p>
									<p>Development loan</p>
								</div>
								<div class="listings__card-info-item">
									<p>LTV</p>
									<p>59.41 %</p>
								</div>
								<div class="listings__card-info-item">
									<p>Annual yield</p>
									<p>9.00 %</p>
								</div>
								<div class="listings__card-info-item">
									<p>Total yield</p>
									<p>13.50 %</p>
								</div>
							</div>
							<button class="btn btn-outline color-black">Invest</button>
							<p class="subtitle overview">Overview</p>
						</div>
					</div>
					<div class="listings__card">
						<div class="listings__card-image">
							<img src="@/assets/images/listings_card3.png" alt="" />
						</div>
						<div class="listings__card-body">
							<div class="listings__card-title">
								<div class="listings__card-icon">
									<img
										src="@/assets/images/listings_build.png"
										alt=""
									/>
								</div>
								<div class="listings__card-name">
									<p>Plaza de Nadal</p>
									<span>Barcelona | 1 building</span>
								</div>
								<div class="listings__card-flag">
									<img
										src="@/assets/images/listings_flag.png"
										alt=""
									/>
								</div>
							</div>
							<div class="listings__card-invest">
								<div class="listings__card-invest-head">
									<p>
										365,564 € <span class="total">/ 680,000 €</span
										><span class="percent">(53.76%)</span>
									</p>
									<span class="deadline">26 days left</span>
								</div>
								<div class="listings__card-invest-bar">
									<div></div>
								</div>
								<p class="invest-count">364 investors</p>
							</div>
							<div class="listings__card-actions">
								<UIIcon path="AA" iconClass="listings__card-action" />
								<UIIcon path="Lock" iconClass="listings__card-action" />
								<UIIcon path="Hand" iconClass="listings__card-action" />
								<UIIcon
									path="Comments"
									iconClass="listings__card-action"
								/>
								<UIIcon path="Info" iconClass="listings__card-action" />
							</div>
							<div class="listings__card-info">
								<div class="listings__card-info-item">
									<p>Term</p>
									<p>Month</p>
								</div>
								<div class="listings__card-info-item">
									<p>Type</p>
									<p>Development loan</p>
								</div>
								<div class="listings__card-info-item">
									<p>LTV</p>
									<p>59.41 %</p>
								</div>
								<div class="listings__card-info-item">
									<p>Annual yield</p>
									<p>9.00 %</p>
								</div>
								<div class="listings__card-info-item">
									<p>Total yield</p>
									<p>13.50 %</p>
								</div>
							</div>
							<button class="btn btn-outline color-black">Invest</button>
							<p class="subtitle overview">Overview</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	</main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page {
	max-width: 1280px;
	margin: 0 auto;
	&__area {
		&-title {
			display: flex;
			gap: 30px;
			align-items: center;
			margin-bottom: 50px;
		}

		&-line {
			position: relative;
			top: 2px;
			height: 1px;
			flex-grow: 1;
			background-color: #dfdfdf;
		}
	}
}
.home {
	&__block {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 130px;
		& > div {
			max-width: calc(50% - 65px);
			& > p {
				max-width: 80%;
			}
		}
		&.cards {
			justify-content: flex-start;
			gap: 140px;
		}
	}
	&__gradient {
		display: flex;
		gap: 30px;
		align-items: baseline;
		flex-grow: 1;
		position: relative;
		bottom: 100px;
	}
	&__gradient-item {
		background: rgba(194, 229, 235, 0.34);
		backdrop-filter: blur(31px);
		border-radius: 36px;
		padding: 22px 0;
		width: 238px;
		p {
			color: white;
			font-size: 12px;
			text-align: center;
			line-height: 137%;
		}
		div {
			position: relative;
			width: fit-content;
			margin: 0 auto;
		}
		&:first-child {
			height: 430px;
			div {
				top: 30px;
				img {
					width: 324px;
					height: 324px;
					transform: scalex(1.3);
				}
			}
		}
	}
	&__block-card {
		border-radius: 36px;
		padding: 48px 48px 40px;
		background: rgb(255, 255, 255, 0.1);
		backdrop-filter: blur(31px);
		position: relative;
		z-index: 1;
		max-width: 513px;
		width: 100%;
		height: 255px;
		&-wrapper {
			border-radius: 36px;
			backdrop-filter: blur(31px);
			position: relative;
			background: rgba(230, 230, 230, 0.34);
			z-index: -1;

			&:nth-child(2) {
				.home__block-card-image {
					right: -135px;
				}
			}
		}
	}
	&__block-card-image {
		position: absolute;
		right: -160px;
		top: -20px;
		z-index: -1;
	}
}
.listings {
	margin-top: 108px;
	&__cards {
		display: flex;
		gap: 10px;
		justify-content: space-between;
		flex-wrap: wrap;
		position: relative;
		&::before {
			content: "";
			position: absolute;
			width: 205px;
			height: 189px;
			bottom: 72px;
			left: -90px;
			background: #27d3dd;
			filter: blur(150px);
			z-index: -1;
		}
	}
	&__card {
		width: 405px;
		height: 676px;
		background: white;
		border-radius: 6px;
		&-body {
			padding: 22px 40px;
		}
		button {
			width: 100%;
		}
		.overview {
			color: var(--main);
			cursor: pointer;
			text-align: center;
			margin-top: 24px;
		}
	}
	&__card-image {
		height: 136px;
		width: 100%;
		border-radius: 6px;
	}
	&__card-title {
		display: flex;
		gap: 12px;
		padding-bottom: 19px;
		border-bottom: 1px solid #eaeaea;
	}
	&__card-icon {
		width: 42px;
		height: 43px;
	}
	&__card-name {
		flex-grow: 1;
		p {
			font-size: 20px;
			font-weight: 700;
			line-height: 20px;
			letter-spacing: 0em;
		}
		span {
			font-size: 12px;
			font-weight: 400;
			line-height: 12px;
			letter-spacing: 0em;
			color: #969696;
		}
	}
	&__card-flag {
		width: 28px;
		height: 18px;
		border-radius: 2px;
	}
	&__card-invest {
		.total {
			color: var(--main);
			margin-right: 9px;
		}

		.deadline,
		.percent {
			font-size: 12px;
			font-weight: 400;
			line-height: 12px;
		}
		.invest-count {
			font-size: 16px;
			font-weight: 400;
			line-height: 16px;
		}
	}
	&__card-invest-head {
		margin-top: 13px;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		p {
			font-size: 16px;
			font-weight: 400;
			line-height: 16px;
		}
	}
	&__card-invest-bar {
		background: #eaeaea;
		border-radius: 31px;
		height: 10px;
		width: 100%;
		position: relative;
		margin-top: 10px;
		margin-bottom: 8px;
		div {
			border-radius: 31px;
			width: 50%;
			position: absolute;
			height: 10px;
			left: 0;
			top: 0;
			background: var(--main);
		}
	}
	&__card-actions {
		display: flex;
		background: #f7f7f8;
		border-radius: 10px;
		padding: 14px 20px;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-top: 20px;
	}
	&__card-action.icon {
		display: flex;
	}
	&__card-info {
		padding: 24px 0;
		&-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			&:not(:last-child) {
				margin-bottom: 16px;
			}
			p {
				font-size: 16px;
				font-weight: 400;
				line-height: 16px;
				color: #717171;
			}
		}
	}
}
@media screen and (max-width: 528px) {
	.home {
		&__block {
			flex-wrap: wrap-reverse;
			margin: 0 20px 58px;
			& > div {
				.title {
					max-width: 70%;
				}
				max-width: 100%;
				p {
					max-width: 95%;
				}
			}
			&-card {
				height: fit-content;
				padding: 33px;
			}
			&-card-wrapper:first-child {
				.home__block-card-image {
					top: unset;
					transform: scale(0.5);
					bottom: -110px;
					right: -20px;
					z-index: 1;
				}
			}
			&-card-wrapper:last-child {
				.home__block-card-image {
					top: unset;
					transform: scale(0.6) rotate(-68deg);
					bottom: -110px;
					right: -30px;
					z-index: 1;
				}
			}
			&.cards {
				flex-wrap: wrap;
				gap: 62px;
			}
		}
		&__gradient {
			justify-content: flex-end;
			bottom: 160px;
		}
		&__gradient-item {
			&:first-child {
				position: absolute;
				top: 0px;
				right: 0;
				width: 159.91px;
				height: 232.54px;
				background: rgba(194, 229, 235, 0.34);
				backdrop-filter: blur(16.6481px);
				border-radius: 19.3333px;
				padding-top: 0;
				div img {
					width: 197px;
					height: 197px;
				}
			}

			p {
				display: none;
			}
			&:last-child {
				display: none;
			}
		}
	}
	.page {
		&__area {
			&-title {
				margin-bottom: 24px;
				h3 {
					font-size: 24px;
					line-height: 24px;
				}
			}
		}
	}
	.listings {
		margin: 0 20px;
		&__cards::before {
			display: none;
		}
		&__card {
			width: 100%;
			max-width: calc(100% - 40px);
			height: fit-content;
			&:not(:first-child) {
				display: none;
			}
			&-body {
				padding: 0;
			}
			.overview {
				color: var(--main);
				cursor: pointer;
				text-align: center;
				margin-top: 24px;
			}
		}
	}
}
</style>
