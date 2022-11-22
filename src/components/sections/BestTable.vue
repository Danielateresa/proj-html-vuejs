<script>
import { store } from '../../store.js';
import InfoComponent from './InfoComponent.vue';
export default {
    name: 'BestTable',
    components: {
        InfoComponent
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section class="best_table">

        <InfoComponent :title="store.infoTable.title" :slogan="store.infoTable.slogan" :text="store.infoTable.text"
            :button="store.infoTable.buttonText" />

    </section>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

.best_table {
    background-color: $dark;
    background-image: url(../../assets/img/slider32x.jpg);
    background-position: left;
    background-size: 55%;
    background-repeat: no-repeat;
    padding: 8rem 0;


}
</style>