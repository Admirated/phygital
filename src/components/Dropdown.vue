<template>
	<div class="dropdown">
		<button
			class="btn dropdown-toggle w-100 pb-2"
			type="button"
			id="dropdownMenuButton1"
			data-bs-toggle="dropdown"
			aria-expanded="false"
			v-text="text"
		></button>
		<ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
			<li v-for="option in options" @click="select(option)">
				<a class="dropdown-item" href="#" v-text="option"></a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Dropdown",
	props: {
		placeholder: {
			type: String,
			required: true,
		},
		options: {
			type: Array,
			required: true,
		},
		selected: {
			type: String,
			required: false,
			default: "",
		},
	},
	emits: {
		select: null,
	},
	data() {
		return {
			text: null,
		};
	},
	mounted() {
		if (this.selected) {
			this.text = this.selected;
			return;
		}
		this.text = this.placeholder;
	},
	methods: {
		select(option) {
			this.text = option;
			this.$emit("select", option);
		},
	},
};
</script>

<style lang="scss" scoped>
.dropdown {
	.btn {
		color: var(--text);
		font-family: KyivType, sans-serif;
		font-style: normal;
		font-size: 16px;
		border: 0;
		padding: 0;
		text-align: left;
	}
	.dropdown-toggle {
		border-bottom: 1px solid var(--gray);
		border-radius: 0;
	}
	.dropdown-toggle::after {
		position: absolute;
		top: 10px;
		right: 0;
	}
}
</style>
