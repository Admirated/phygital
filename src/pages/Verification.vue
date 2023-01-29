<template>
    <div class="row m-0 d-flex justify-content-center">
        <div class="col-12 col-lg-6 col-xl-5 p-0">
            <div class="card border-0 wave">
                <div class="card-body">
                    <UIIcon class="d-inline-block align-super pe-2"
                            path="Back"
                            @click="back"/>
                    <h3 class="d-inline-block">Verification</h3>
                    <div class="row verify-type mt-4 ms-0 me-0 w-100"
                         @click="select(verifyType.type)"
                         v-if="!type"
                         v-for="verifyType in verifyTypes">
                        <div class="col-3 p-0">
                            <div class="icon-box d-flex align-items-center justify-content-center">
                                <UIIcon :path="verifyType.type" />
                            </div>
                        </div>
                        <div class="col-9 p-0 d-flex align-items-center">
                            <span class="verify-title" v-text="verifyType.title"></span>
                        </div>
                    </div>
                    <VerificationWallet v-if="type === 'Wallet'"/>
                    <VerificationMail v-if="type === 'Mail'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VerificationWallet from "./inc/VerificationWallet.vue";
    import VerificationMail from "./inc/VerificationMail.vue";

    export default {
        components: {
            VerificationWallet,
            VerificationMail
        },
        data() {
            return {
                type: null,
                verifyTypes: [
                    {
                        title: "Verifiaction by crypto wallet",
                        type: "Wallet",
                    },
                    {
                        title: "Verifiaction by email",
                        type: "Mail",
                    },
                ],
            };
        },
        methods: {
            select(type) {
                this.type = type;
            },
            back() {
                this.type = null;
            },
        }
    };
</script>

<style lang="scss" scoped>
    .verify-type {
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 12px;
        cursor: pointer;
        .icon-box {
            width: 60px;
            height: 60px;
            background: var(--light-main);
            border-radius: 4px;
            span {
                height: 27px;
            }
        }
        .verify-title {
            font-family: Roboto, sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
        }
    }
</style>