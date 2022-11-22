<script>
export default {
    name: 'MenuComponent',
    props: {
        name: String,
        price: String,
        description: String,
    },

}

</script>

<template>

    <div class="menu_plate">
        <h2>name</h2><span>price</span>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;
</style>
