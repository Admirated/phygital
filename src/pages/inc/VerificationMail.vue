<template>
    <div class="pt-4">
        <label>Email</label>
        <Text placeholder="Email"/>
    </div>
    <div class="pt-4">
        <label>Name</label>
        <Text placeholder="Name"/>
    </div>
    <div class="pt-4 mb-4">
        <label>Password</label>
        <Text placeholder="Password"/>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="check1" checked>
        <label class="form-check-label w-75 ps-1" for="check1">Accept private policy</label>
    </div>
    <div class="mb-2 form-check">
        <input type="checkbox" class="form-check-input" id="check2">
        <label class="form-check-label w-75 pt-1 ps-1" for="check2">Receive commercial information on real estate, news and service offers from idealista; id/mortgages; id/insurance; Avaibook; BDMI; rental;</label>
    </div>
    <button class="btn btn-outline color-main mt-4 mb-0">Submit</button>
</template>

<script>
    export default {
        name: "VerificationMail",
    }
</script>

<style lang="scss" scoped>
    .form-check-label {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 137%;
        color: var(--text);
    }
</style>