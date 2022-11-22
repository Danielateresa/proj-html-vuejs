<script>
import { store } from '../../store.js';
import InfoComponent from './InfoComponent.vue';
export default {
    name: 'TakeoutNow',
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

        <InfoComponent :title="store.infoTakeout.title" :slogan="store.infoTakeout.slogan"
            :text="store.infoTakeout.text" :button="store.infoTakeout.buttonText" />

    </section>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

.best_table {
    background-color: $dark;
    background-image: url(../../assets/img/slider72x-scaled.jpg);
    background-position: left;
    background-size: 55%;
    background-repeat: no-repeat;
    padding: 8rem 0;


}
</style>