<template>
	<span class="icon" :class="iconClass">
		<component :is="icon"/>
	</span>
</template>

<script>
    import {defineAsyncComponent} from "vue";

    export default {
        name: "UIIcon",
        props: {
            path: {
                type: String,
                required: true,
            },
            iconClass: {
                type: String,
                required: false,
            },
        },
        computed: {
            icon() {
                return defineAsyncComponent(() =>
                    import(`../../assets/images/icons/${this.path}.svg`)
                );
            },
        },
    };
</script>

<style lang="scss" scoped>
    .icon {
        cursor: pointer;
        display: block;
        &.not-click {
            cursor: default;
        }
    }
</style>
