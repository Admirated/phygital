<template>
    <footer>
        <div class="footer__container pb-4">
            <div class="row">
                <div class="col-12 separator pb-4">
                    <span class="d-inline-block">Join us</span>
                    <hr class="d-inline-block">
                </div>
                <div class="col-12 col-lg-3 col-xl-2 pt-2">
                    <div class="footer__logo pt-1">
                        <RouterLink :to="{ name: 'Home' }" class="d-inline-block">
                            <UIIcon path="LogoFooter" />
                        </RouterLink>
                    </div>
                    <div class="footer__reserved pt-4"><span>All right reserved</span> Phygital<br> Real Estate 2023</div>
                </div>
                <div class="col-12 col-lg-5 pt-5 pt-lg-2 ps-lg-3 ps-xl-5">
                    <strong>Have a property to list or project to fund?</strong>
                    <UIIcon path="separator" />
                    <div class="pt-3 pb-4 w-75">We're eager to hear from you, contact us today so we can discuss it further.</div>
                    <button class="btn btn-outline color-main mb-0 mb-lg-3">Submit a property</button>
                </div>
                <div class="col-12 col-lg-4 col-xl-5 pt-5 pt-lg-2 mb-3 mb-lg-0">
                    <strong>Documents</strong>
                    <UIIcon path="separator" />
                    <ul class="ps-0">
                        <li class="pt-3">
                            <RouterLink :to="{ name: '' }" class="d-inline-block">
                                Privacy Policy
                            </RouterLink>
                        </li>
                        <li class="pt-3">
                            <RouterLink :to="{ name: '' }" class="d-inline-block">
                                Therms of use
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables.scss";

    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 137%;
        color: var(--text);
        @media screen and (max-width: $small) {
            position: relative;
            margin-top: 120px;
        }
        .footer {
            &__reserved {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 137%;
                color: var(--black);
                span {
                    color: var(--text);
                }
            }
            &__container {
                padding: 0px 80px;
                @media screen and (max-width: $small) {
                    padding: 0px 20px;
                }
                .separator {
                    span {
                        font-family: Articulat, sans-serif;
                        font-weight: 700;
                        font-size: 24px;
                        color: #1A1E2C;
                        width: 110px;
                        line-height: 33px;
                        @media screen and (max-width: $small) {
                            width: 95px;
                        }
                    }
                    hr {
                        width: calc(100% - 110px);
                        color: var(--text);
                        vertical-align: bottom;
                        @media screen and (max-width: $small) {
                            width: calc(100% - 95px);
                        }
                    }
                }
                strong {
                    color: var(--black);
                    font-weight: 400;
                }
                .btn {
                    width: 194px;
                    padding: 11px 0;
                    color: var(--white);
                    &:hover {
                        color: var(--black);
                    }
                }
                ul li {
                    list-style: none;
                    line-height: 100%;
                    a {
                        color: var(--text);
                        list-style: none;
                        text-decoration: none;
                    }
                }
                .w-75 {
                    @media screen and (max-width: $small) {
                        width: 100% !important;
                    }
                }
            }
        }
    }
</style>