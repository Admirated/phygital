<template>
	<div class="row m-0 d-flex justify-content-center">
		<div class="col-12 col-lg-6 col-xl-5 p-0">
			<div class="card border-0 card__wave">
				<div class="card-body">
					<template v-if="page === 'signUp'">
						<h3>Sign Up</h3>
						<div class="pt-4">
							<label class="form-label">Im a ...</label>
							<dropdown
								placeholder="Please Select"
								:options="options"
								:selected="description"
								@select="selectOption"
							/>
						</div>
						<button
							class="ui-btn btn-outline color-main mt-4 mb-0"
							@click="verificate"
						>
							Submit
						</button>
					</template>

					<Verification
						v-if="page === 'verification'"
						:description="description"
						@back="this.page = 'signUp'"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";

export default {
	components: {
		Dropdown,
	},
	data() {
		return {
			options: [
				"Real Estate Agent",
				"Brokerage/REIT/Developer",
				"Real Estate Buyer",
				"Real Estate Seller",
				"Crypto Investor",
				"Real Estate Investor",
				"Title/Escrow Company",
				"Other",
			],
			page: "signUp",
			description: "",
		};
	},
	methods: {
		verificate() {
			if (!this.description) {
				return;
			}
			this.page = "verification";
		},
		selectOption(opt) {
			this.description = opt;
		},
	},
};
</script>
<style scoped>
button {
	margin-top: 33px;
	width: 194px;
}
</style>
