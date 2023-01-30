<template>
    <div class="row m-0 mt-lg-5 d-block d-lg-flex justify-content-center">
        <div class="col-12 col-lg-10 p-0 mb-4 mb-lg-0">
            <h2 class="page__title">
                <span>Notification</span> activity
            </h2>
        </div>
        <div class="col-12 col-lg-10 p-0" v-for="notification in notificationsSlice">
            <div class="card border-0 mb-0 mb-lg-2">
                <div class="card-body notification">
                    <h5 v-text="notification.title"></h5>
                    <div class="notification__date float-end d-none d-lg-flex" v-html="notification.date"></div>
                    <div class="notification__text pt-1" v-html="notification.text"></div>
                    <div class="notification__date d-block d-lg-none" v-html="notification.date"></div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-10 p-0">
            <vue-paginate v-if="pages"
                          :page-count="pages"
                          :page-range="6"
                          :margin-pages="2"
                          container-class="paginate"
                          page-class="paginate__page"
                          active-class="paginate__active"
                          prev-class="paginate__prev"
                          next-class="paginate__next"
                          prev-text=""
                          next-text=""
                          :click-handler="changePage"/>
        </div>
    </div>
</template>

<script>
    import notifications from './inc/notifications.js';
    import VuePaginate from '@svifty7/vue-paginate';

    export default {
        components: {
            VuePaginate
        },
        data() {
            return {
                notifications: notifications,
                pageSize: 7,
                pages: 0,
                page: 1,
            }
        },
        mounted() {
            this.pages = Math.ceil(notifications.length / this.pageSize);
        },
        computed: {
            notificationsSlice() {
                let skip = this.pageSize * (this.page - 1);
                return this.notifications.slice(skip, skip + this.pageSize);
            }
        },
        methods: {
            changePage(page) {
                this.page = page;
            }
        }

    }
</script>

<style lang="scss">
    @import "../assets/scss/_variables.scss";

    .card {
        margin-bottom: 8px;
        @media screen and (max-width: $small) {
            padding: 0 20px 17px;
        }
        .card-body {
            font-family: Roboto, sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: var(--text);
            padding: 25px 29px 32px !important;
            line-height: 137%;
            @media screen and (max-width: $small) {
                box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.09);
                padding: 14px !important;
                border-radius: 6px;
            }
            h5 {
                font-family: Roboto, sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                color: var(--black);
            }
            .notification {
                &__text {
                    display: flex;
                    span {
                        font-family: ArticulatCF, sans-serif;
                        font-weight: 900;
                        font-size: 20px;
                        line-height: 100%;
                        color: var(--black);
                        padding-right: 17px;
                    }
                }
                &__date {
                    font-weight: 500;
                    font-size: 16px;
                    color: var(--black);
                    margin-top: -12px;
                    @media screen and (max-width: $small) {
                        margin-top: 20px;
                    }
                }
            }
        }
    }
    .ellipse.top {
        display: none;
    }
    .main-bg {
        background: url("@/assets/images/main_bg2.png") center;
    }
</style>