<template>
	<main class="page">
		<InvestModal
			v-if="isInvestModalOpen"
			:objectId="objectId"
			@closeModal="isInvestModalOpen = false"
		/>
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
				<swiper
					class="listings__cards"
					:breakpoints="breakpoints"
					:modules="modules"
					navigation
					:pagination="{ clickable: true }"
				>
					<swiper-slide
						><div class="listings__card">
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
									<UIIcon
										path="AA"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Lock"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Hand"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Comments"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Info"
										iconClass="listings__card-action"
									/>
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
								<button
									class="ui-btn btn-outline color-black"
									@click="openInvestModal(1)"
								>
									Invest
								</button>
								<p class="subtitle overview">Overview</p>
							</div>
						</div></swiper-slide
					>
					<swiper-slide>
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
									<UIIcon
										path="AA"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Lock"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Hand"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Comments"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Info"
										iconClass="listings__card-action"
									/>
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
								<button
									class="ui-btn btn-outline color-black"
									@click="openInvestModal(2)"
								>
									Invest
								</button>
								<p class="subtitle overview">Overview</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide
						><div class="listings__card">
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
									<UIIcon
										path="AA"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Lock"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Hand"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Comments"
										iconClass="listings__card-action"
									/>
									<UIIcon
										path="Info"
										iconClass="listings__card-action"
									/>
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
								<button
									class="ui-btn btn-outline color-black"
									@click="openInvestModal(3)"
								>
									Invest
								</button>
								<p class="subtitle overview">Overview</p>
							</div>
						</div></swiper-slide
					>
				</swiper>
			</section>
		</section>
	</main>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			isInvestModalOpen: false,
			objectId: null,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				900: {
					slidesPerView: 3,
					spaceBetween: 33,
				},
			},
			modules: [Pagination],
		};
	},
	methods: {
		openInvestModal(objectId) {
			this.isInvestModalOpen = true;
			this.objectId = objectId;
		},
	},
};
</script>

<style lang="scss">
.swiper-wrapper {
	padding-bottom: 25px;
}
</style>
