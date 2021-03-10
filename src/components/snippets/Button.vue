<template>
    <b-button :class="{'cta': isCta}">
        <slot></slot>
    </b-button>
</template>
<script>
export default {
    props: ['isCta']
};

</script>

<style lang="scss" scoped>
    @import 'assets/scss/variables';

    .btn {
        border-radius: 0;
        border: 0;
        padding: .5rem 2.75rem;
        background: $color-dark;
        color: #FFF;
        font-size: 1em;
        margin: 10px auto;
        width: 90%;

        &:hover {
            opacity: 85%;
        }



        &.cta {
            display: block;
            margin-top: 20px;
            font-size: 1.25em;
            font-weight: 600;
            width: 100%;
        }
    }


    @media all and (max-width:768px) {
        .btn {
            width: 100%;
            padding: 1rem;
        }
    }
</style>