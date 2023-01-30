<template>
    <div class="row m-0 mt-2 mt-lg-5 pt-0 pt-lg-4 d-flex justify-content-center">
        <div class="col-12 col-lg-10 p-0">
            <div class="card border-0 bg-1-about">
                <div class="card-body">
                    <h3>Why us</h3>
                    <p class="pt-2">Build your Real Estate Portfolio. Meet phygital real estate, a simple, secure real estate investment platform who joins developers, whales and crypto investors.</p>
                    <ul class="pt-1">
                        <li>Meet phygital real estate whales and crypto investors.</li>
                        <li>Hygital real estate, a simple</li>
                        <li>Real Estate Portfolio. Meet phygital real estate, a s</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-10 p-0 mt-5 pt-0 pt-lg-4">
            <div class="card border-0 bg-2-about">
                <div class="card-body card-right">
                    <h3>How to invest</h3>
                    <p class="pt-2">Build your Real Estate Portfolio. Meet phygital real estate, a simple, secure real estate investment platform who joins developers, whales and crypto investors.</p>
                    <ul class="pt-1">
                        <li>Meet phygital real estate whales and crypto investors.</li>
                        <li>Hygital real estate, a simple</li>
                        <li>Real Estate Portfolio. Meet phygital real estate, a s</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables.scss";

    .card {
        background-color: #F2F2F2;
        border-radius: 36px;
        @media screen and (max-width: $small) {
            margin: 0 20px;
            border-radius: 12px;
        }
        &.bg-1-about {
            &:after {
                background-image: url("@/assets/images/about1.png");
                background-size: cover;
                content: "";
                width: 433px;
                height: 360px;
                position: absolute;
                right: 0;
                top: -22px;
                @media screen and (max-width: $small) {
                    position: inherit;
                    width: auto;
                    height: 290px;
                    top: 0;
                    margin-bottom: 10px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }
        }
        &.bg-2-about {
            &:after {
                background-image: url("@/assets/images/about2.png");
                background-size: cover;
                content: "";
                width: 414px;
                height: 414px;
                position: absolute;
                left: 0;
                top: -60px;
                @media screen and (max-width: $small) {
                    position: inherit;
                    width: auto;
                    height: 350px;
                    top: 0;
                    margin-bottom: 10px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }
        }
        .card-body {
            font-family: Roboto, sans-serif;
            font-style: normal;
            font-size: 16px;
            font-weight: 400;
            line-height: 137%;
            padding: 48px 54px;
            @media screen and (max-width: $small) {
                padding: 25px 25px;
            }
            h3 {
                font-family: ArticulatCF, sans-serif;
                font-style: normal;
                font-weight: 900;
                font-size: 33px;
                line-height: 100%;
                text-transform: uppercase;
                color: var(--black);
            }
            p {
                color: var(--text);
                width: calc(100% - 380px);
                @media screen and (max-width: $small) {
                    width: 100%;
                }
            }
            ul {
                list-style: decimal;
                padding-left: 16px;
                color: var(--black);
                width: calc(100% - 380px);
                @media screen and (max-width: $small) {
                    width: 100%;
                }
                li  {
                    padding-bottom: 20px;
                    &:last-child {
                        padding-bottom: 0;
                    }
                }
            }
            &.card-right {
                padding-left: 444px;
                @media screen and (max-width: $small) {
                    padding: 25px 25px;
                }
                ul {
                    width: 100%;
                }
                p {
                    width: 100%;
                }
            }
        }
    }
</style>

<style lang="scss">
    @import "../assets/scss/_variables.scss";

    .ellipse.top {
        display: none;
    }
    .page {
        padding-top: 177px;
    }
</style>