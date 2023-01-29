<template>
    <div class="row m-0 d-flex justify-content-center">
        <div class="col-12 col-lg-6 col-xl-5 p-0">
            <div class="card border-0 card__wave">
                <div class="card-body">
                    <h3>Sign in</h3>
                    <div class="pt-4">
                        <label class="form-label">Im a ...</label>
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
        components: {
            Dropdown
        },
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
</script>