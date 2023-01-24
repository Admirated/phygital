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
}
.home {
	&__block {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 130px;
		& > div {
			max-width: calc(50% - 65px);
			p {
				max-width: 80%;
			}
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
			div img {
				width: 324px;
				height: 324px;
			}
		}
	}
}
</style>
