<script>
import OurFood from '../components/sections/ourFood.vue';
import BestTable from '../components/sections/BestTable.vue';
import CriticsAbtUs from '../components/sections/CriticsAbtUs.vue';
import SiteJumbotron from '../components/sections/SiteJumbotron.vue';
import NewsPromotions from '../components/sections/NewsPromotions.vue';
import TakeoutNow from '../components/sections/TakeoutNow.vue';
import MenuTakeout from '../components/sections/MenuTakeout.vue';
import FocusOnPlate from '../components/sections/FocusOnPlate.vue';

export default {
    name: 'AppMain',
    components: {
        OurFood,
        BestTable,
        CriticsAbtUs,
        SiteJumbotron,
        NewsPromotions,
        TakeoutNow,
        MenuTakeout,
        FocusOnPlate,
    }
}

</script>

<template>

    <OurFood />
    <BestTable />
    <CriticsAbtUs />
    <SiteJumbotron />
    <NewsPromotions />
    <TakeoutNow />
    <MenuTakeout />
    <FocusOnPlate />

</template>

<style lang="scss" scoped>

</style>