<template>
    <input type="text" class="p-0 pb-2 w-100" :placeholder="placeholder"/>
</template>

<script>
    export default {
        name: "Text",
        props: {
            placeholder: {
                type: String,
                default: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    input {
        font-family: KyivType, sans-serif;
        font-style: normal;
<<<<<<< HEAD
        font-weight: 0;
=======
>>>>>>> origin/arthur
        font-size: 16px;
        line-height: 100%;
        color: var(--text);
        border-bottom: 1px solid var(--gray);
        border-radius: 0;
    }

    input::placeholder {
<<<<<<< HEAD
        color: #DADADA;
=======
        color: var(--light-gray);
>>>>>>> origin/arthur
    }
</style>