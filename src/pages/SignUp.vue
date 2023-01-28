<template>
    <div class="row m-0 d-flex justify-content-center">
        <div class="col-12 col-lg-6 col-xl-5 p-0">
            <div class="card border-0 wave">
                <div class="card-body">
                    <h3>Sign up</h3>
                    <div class="pt-4">
                        <label>Email</label>
                        <Text placeholder="Email"/>
                    </div>
                    <div class="pt-4 mb-3">
                        <label>Password</label>
                        <Text placeholder="Password"/>
                    </div>
                    <button class="btn btn-outline color-main mt-4 mb-0">Submit</button>
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
        border-radius: 8px;
        @media screen and (max-width: $small) {
            border-radius: 0;
        }
        .card-body {
            padding: 75px 100px;
            @media screen and (max-width: $small) {
                padding: 29px 20px;
            }
        }
        h3 {
            text-transform: uppercase;
            font-family: ArticulatCF, sans-serif;
            font-weight: 900;
            color: var(--black);
            font-size: 33px;
        }
        label {
            color: var(--text);
            font-family: KyivType, sans-serif;
            font-style: normal;
            font-size: 12px;
            margin-bottom: -3px;
            display: block;
        }
        .btn {
            width: 194px;
            padding: 11px 0;
            color: var(--white);
            &:hover {
                color: var(--black);
            }
            @media screen and (max-width: $small) {
                width: 100%;
            }
        }
    }
</style>