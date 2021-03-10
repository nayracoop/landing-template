<template>
    <b-row>
        <b-col class="col-12 col-md-6 section-heading">
            <h2 class="pb-2">
                <slot></slot>
            </h2>
        </b-col>
    </b-row>
</template>

<style lang="scss" scoped>
    .section-heading {
        margin-bottom: 40px;
        margin-top: 50px;
    }

</style>