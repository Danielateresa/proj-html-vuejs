
<template>

    <button class="site_button text-uppercase fw-bold">
        <slot></slot>
    </button>

</template>

<style lang="scss" scoped>
.site_button {
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    background-color: transparent;
}
</style>