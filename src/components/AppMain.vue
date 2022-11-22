<script>
import OurFood from '../components/sections/ourFood.vue';
import BestTable from '../components/sections/BestTable.vue';
import CriticsAbtUs from '../components/sections/CriticsAbtUs.vue';
export default {
    name: 'AppMain',
    components: {
        OurFood,
        BestTable,
        CriticsAbtUs
    }
}

</script>

<template>

    <OurFood />
    <BestTable />
    <CriticsAbtUs />

</template>

<style lang="scss" scoped>

</style>