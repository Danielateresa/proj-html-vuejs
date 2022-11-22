<script>
import { store } from '../../store.js';
import SiteButton from '../../components/SiteButton.vue';
export default {
    name: 'FocusOnPlate',
    components: {
        SiteButton
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section class="focus_on_plate">

        <div class="container py-5">
            <div class="row">
                <div class="col-4">
                    <div class="info_box">

                        <div class="text_box">
                            <div class="plate_info d-flex justify-content-between mb-5">
                                <h2 class="text-uppercase w-25">{{ store.plateFocus.title }}</h2><span>{{
                                        store.plateFocus.price
                                }}</span>
                            </div>

                            <div class="line mt-4"></div>
                            <p class="mt-4">{{ store.plateFocus.text }}</p>

                            <siteButton class="site_button mt-4">
                                {{ store.plateFocus.buttonText }}
                            </siteButton>
                            <!-- button component -->
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- focus_on_plate -->

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

.focus_on_plate {

    background-image: url(../../assets/img/hero42x.jpg);

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 7rem 0;

    .line {
        border-bottom: 1px solid $silver;
        width: 50px;
        height: min-content;
    }

    h2 {
        color: $light;
    }

    span,
    p {
        color: $silver;
    }

    .site_button {
        background-color: transparent;
        border: 1px solid $silver;
        color: $silver;

        &:hover {
            background-color: $light;
            color: $dark;
        }
    }

    .info_box {
        background-color: $dark;
        padding: 4rem 3rem
    }
}
</style>