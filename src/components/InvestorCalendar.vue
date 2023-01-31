<template>
    <div class="row m-0 p-0 d-flex">
        <div class="col-1 p-0 m-0" v-for="index in 12">
            <span class="pb-2" v-text="getMonthName(index)"></span>
            <ProgressBar :percent="index <= month ? 100 : 0"/>
        </div>
    </div>
</template>

<script>
    import ProgressBar from "../components/ProgressBar.vue";

    export default {
        name: "InvestorCalendar",
        components: {
            ProgressBar
        },
        props: {
            month: {
                type: Number,
                required: true
            }
        },
        methods: {
            getMonthName(monthNumber) {
                let date = new Date();
                date.setMonth(monthNumber - 1);
                return date.toLocaleString('en-US', { month: 'short' });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables.scss";

    .row {
        gap: 6px;
        .col-1 {
            width: calc(8.33333333% - 5.5px);
            span {
                font-family: Roboto, sans-serif;
                font-style: normal;
                font-size: 12px;
                line-height: 100%;
                color: #969696;
                @media screen and (max-width: $small) {
                    font-size: 10px;
                }
            }
        }
    }
</style>