<script>
import OurFood from '../components/sections/ourFood.vue';
import BestTable from '../components/sections/BestTable.vue';
export default {
    name: 'AppMain',
    components: {
        OurFood,
        BestTable
    }
}

</script>

<template>

    <OurFood />
    <BestTable />

</template>

<style lang="scss" scoped>

</style>