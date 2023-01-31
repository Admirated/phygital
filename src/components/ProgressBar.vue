<template>
    <div class="progress-bar">
        <div class="progress-line" :style="'width:' + this.percent + '%'"></div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: {
            percent: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .progress-bar {
        width: 100%;
        height: 10px;
        background: #EAEAEA;
        border-radius: 31px;
        .progress-line {
            background: var(--main);
            height: 10px;
            border-radius: 31px;
        }
    }
</style>