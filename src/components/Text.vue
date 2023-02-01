<template>
	<input
		:type="type"
		class="p-0 pb-2 w-100"
		:placeholder="placeholder"
		:name="name"
		@input="changeText"
	/>
</template>

<script>
export default {
	name: "Text",
	emits: ["update:modelValue"],
	props: {
		placeholder: {
			type: String,
			default: "",
		},
		name: {
			type: String,
			default: "",
			required: false,
		},
		type: {
			type: String,
			default: "text",
			required: false,
		},
	},
	methods: {
		changeText(text) {
			this.$emit("update:modelValue", text.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
input {
	font-family: KyivType, sans-serif;
	font-style: normal;
	font-size: 16px;
	line-height: 100%;
	color: var(--text);
	border-bottom: 1px solid var(--gray);
	border-radius: 0;
}

input::placeholder {
	color: var(--light-gray);
}
</style>
