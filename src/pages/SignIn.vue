<template>
    <div class="row m-0 d-flex justify-content-center">
        <div class="col-12 col-lg-6 col-xl-5 p-0">
<<<<<<< HEAD
            <div class="card border-0">
                <div class="card-body">
                    <h3>Sign in</h3>
                    <div class="pt-4">
                        <label>Im a ...</label>
=======
            <div class="card border-0 card__wave">
                <div class="card-body">
                    <h3>Sign in</h3>
                    <div class="pt-4">
                        <label class="form-label">Im a ...</label>
>>>>>>> origin/arthur
                        <dropdown placeholder="Please Select" :options="options"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dropdown from "../components/Dropdown.vue";

    export default {
        components: {Dropdown},
        data() {
            return {
                options: [
                    'Option 1',
                    'Option 2',
                    'Option 3'
                ]
            }
        }
    };
<<<<<<< HEAD
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
    }
</style>
=======
</script>
>>>>>>> origin/arthur
