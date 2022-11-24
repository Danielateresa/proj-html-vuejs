<script>
import OurFood from './sections/ourFood.vue';
import BestTable from './sections/BestTable.vue';
import CriticsAbtUs from './sections/CriticsAbtUs.vue';
import SiteJumbotron from './sections/SiteJumbotron.vue';
import NewsPromotions from './sections/NewsPromotions.vue';
import TakeoutNow from './sections/TakeoutNow.vue';
import MenuTakeout from './sections/MenuTakeout.vue';
import FocusOnPlate from './sections/FocusOnPlate.vue';

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