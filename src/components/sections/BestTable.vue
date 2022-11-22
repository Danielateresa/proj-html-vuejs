<script>
import { store } from '../../store.js';
import SiteButton from '../SiteButton.vue';
export default {
    name: 'BestTable',
    components: {
        SiteButton,
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
        <div class="container">
            <div class="row w-100 d-flex justify-content-end ">
                <div class="col-1">
                    <div class="line me-5 mt-2"></div>
                </div>
                <!-- /.col-1 -->

                <div class="col-3">
                    <div class="slogan">

                        <h6 class="text-uppercase">the dinning experience</h6>
                    </div>
                    <div class="text">
                        <h2 class="text-uppercase py-4">the best table in town</h2>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit quia
                            cumque.</p>

                    </div>

                    <siteButton class="site_button">
                        explore the menu
                    </siteButton>
                    <!-- button component -->

                </div>
                <!-- /.col-3 -->
            </div>

        </div>
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

    .line {
        border-bottom: 1px solid $silver;
        width: 50px;
        height: min-content;
    }

    .col-3 {
        color: $silver;

        h2 {
            color: $light;
        }

        .site_button {
            color: $light;
            border: 1px solid $silver;
            margin-top: 40px;

            &:hover {
                background-color: $light;
                color: $dark;
            }
        }
    }

}
</style>