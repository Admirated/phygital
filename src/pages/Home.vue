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
					<swiper-slide v-for="object in objects" :key="object.id"
						><div class="listings__card">
							<div class="listings__card-image">
								<img
									:src="`@/assets/images/${object.img}.png`"
									alt=""
								/>
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
										<p>{{ object.area }}</p>
										<span>{{ object.city }}</span>
									</div>
									<div class="listings__card-flag">
										<img
											:src="`@/assets/images/${object.country}.png`"
											alt=""
										/>
									</div>
								</div>
								<div class="listings__card-invest">
									<div class="listings__card-invest-head">
										<p>
											{{ object.invested }}
											<span class="total"
												>/ {{ object.total }} €</span
											><span class="percent"
												>({{
													(object.invested / object.total) * 100
												}}%)</span
											>
										</p>
										<span class="deadline"
											>{{ getDaysByDeadline(object.deadline) }} days
											left</span
										>
									</div>
									<div class="listings__card-invest-bar">
										<div
											:style="`width: ${
												(object.invested / object.total) * 100
											}%`"
										></div>
									</div>
									<p class="invest-count">
										{{ object.investors }} investors
									</p>
								</div>
								<div class="listings__card-actions hide">
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
										<p>{{ object.term }}</p>
									</div>
									<div class="listings__card-info-item">
										<p>Type</p>
										<p>{{ object.type }}</p>
									</div>
									<div class="listings__card-info-item">
										<p>LTV</p>
										<p>{{ object.ltv }} %</p>
									</div>
									<div class="listings__card-info-item">
										<p>Annual yield</p>
										<p>{{ object.annualYeield }} %</p>
									</div>
									<div class="listings__card-info-item">
										<p>Total yield</p>
										<p>{{ object.totalYeield }} %</p>
									</div>
								</div>
								<button
									class="ui-btn btn-outline color-black"
									@click="openInvestModal(object.id)"
								>
									Invest
								</button>
								<p
									class="subtitle overview"
									@click="overview(object.id)"
								>
									Overview
								</p>
							</div>
						</div></swiper-slide
					>
				</swiper>
			</section>
		</section>
	</main>
</template>

<script>
import { getObjects } from "@/api/objects";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { getNftBalance, claimDividends } from "@/api/wallet";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			isInvestModalOpen: false,
			objectId: null,
			objects: [],
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
	created() {
		getObjects().then((res) => {
			if (res.objects?.length) {
				this.objects = res.objects;
			}
		});
		claimDividends(localStorage.getItem("wallet_address")).then((res) => {
			console.log(res);
		});
	},
	methods: {
		openInvestModal(objectId) {
			this.isInvestModalOpen = true;
			this.objectId = objectId;
		},
		async overview(objectId) {
			await this.$router.push({ path: `/object/${objectId}` });
			window.scroll(0, 0);
		},
		getDaysByDeadline(deadline) {
			const dateNow = Date.now() / 1000;
			if (deadline - dateNow <= 0) {
				return 0;
			}
			return deadline - dateNow / 86400;
		},
	},
};
</script>

<style lang="scss">
.swiper-wrapper {
	padding-bottom: 25px;
}
</style>
