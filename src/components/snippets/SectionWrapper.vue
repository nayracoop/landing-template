<template>
    <div class="section">
        <b-container>
            <slot></slot>
        </b-container>
    </div>
</template>

<style lang="scss" scoped>
    .section {
        padding-top: 70px;
        padding-bottom: 70px;
        border-bottom: 1px solid rgba(211, 211, 211, 0.3);
        border-top: 1px solid rgba(211, 211, 211, 0.3);
    }
</style>