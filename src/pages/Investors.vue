<template>
    <div class="row m-0 mt-lg-5 d-block d-lg-flex justify-content-center">
        <div class="col-12 col-lg-10 p-0 mb-4 mb-lg-0">
            <h2 class="page__title">
                <span>Investors</span> view
            </h2>
        </div>
        <div class="col-12 col-lg-10 p-0" v-for="investor in investors">
            <div class="card border-0 mb-4">
                <div class="card-body p-0">
                    <img :src="investor.image"/>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-10 p-0">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                investors: [
                    {
                        image: '/src/assets/images/investors1.png',
                    },
                    {
                        image: '/src/assets/images/investors2.png',
                    },
                    {
                        image: '/src/assets/images/investors3.png',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .card {
        .card-body {
            height: 263px;
            img {
                border-radius: 8px;
                max-height: 100%;
                object-fit: cover;
            }
        }
    }
</style>

<style lang="scss">
    .ellipse.top {
        display: none;
    }
    .main-bg {
        background: url("@/assets/images/main_bg2.png") center;
    }
</style>