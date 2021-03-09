<template>
    <RouterView />
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Bitter:400,400i,700|Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap');
    @import 'assets/css/reset';
    @import 'node_modules/bootstrap/scss/bootstrap';
    @import 'node_modules/bootstrap-vue/src/index.scss';
    @import 'assets/scss/variables';

    body {
        width: 100%;
        height: 100%;
        background: #fff;
        color: $color-dark;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }

    body a {
        color: $color-dark;
        &:hover {
            color: $color-purple;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Montserrat', serif;
        font-weight: 700;
    }

    h1 {
        font-size: 1.8rem;
        margin: auto;
        text-align: center;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.3rem;
    }

    i {
        font-style: italic;
    }

        .color-yellow {
        color: $color-yellow;
    }

    .color-green {
        color: $color-green;
    }

    .color-blue {
        color: $color-blue;
    }

    .color-purple {
        color: $color-purple;
    }

    .color-red {
        color: $color-red;
    }

    .color-orange {
        color: $color-orange;
    }

    .b-yellow {
        background-color: $color-yellow!important;
    }

    .b-green {
        background-color: $color-green!important;
    }

    .b-blue {
        background-color: $color-blue!important;
    }

    .b-purple {
        background-color: $color-purple!important;
    }

    .b-red {
        background-color: $color-red!important;
    }

    .b-orange {
        background-color: $color-orange!important;
    }

    .section {
        padding-top: 70px;
        padding-bottom: 70px;
        border-bottom: 1px solid rgba(211, 211, 211, 0.3);
        border-top: 1px solid rgba(211, 211, 211, 0.3);
    }

    .bg-grey {
        background: rgba(244, 244, 244, 0.3);
    }

    .section-heading {
        margin-bottom: 40px;
        margin-top: 50px;
    }

    .btn {
        border-radius: 0;
        padding: .5rem 2.75rem;
        background: $color-dark;
        color: #FFF;
    }

    @media all and (max-width: 450px) {
        h2 {
            font-size: 2rem;
        }
        h3 {
            font-size: 1.65rem;
        }
    }

    @media all and (max-width:991px) {
        h3 {
            font-size: 1.75rem;
        }
    }

</style>
