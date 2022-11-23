<script>
import { store } from '../../store.js';
import SiteButton from '../SiteButton.vue';
export default {
    name: 'OurFood',
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

    <section class="our_food py-4">
        <div class="container my-4 p-2">
            <div class="row upper">
                <div class="col-5 pt-5 d-flex flex-column justify-content-between">


                    <p class="py-2" v-html="store.ourFood.firstPharag"></p>
                    <h2 class="text-uppercase pb-2">{{ store.ourFood.title }}</h2>
                    <p class="py-2">{{ store.ourFood.secondPharag }}</p>
                    <img :src="`../../src/assets/img/${store.ourFood.signature}`" alt="signature">
                </div>
                <!-- /.col-5 -->

                <div class="col-7 ps-5 h-100 text-end">
                    <div class="img_box position-relative">
                        <img :src="`../../src/assets/img/${store.ourFood.img}`" alt="sushi plate">
                        <span class="text-uppercase fs-6 fw-bold">{{ store.ourFood.plateDescription }}</span>

                    </div>

                </div>
                <!-- /.col-7 -->
            </div>
            <!-- /.upper-->

            <div class="row row-cols-3 w-100 bottom ">

                <div class="col text-center gx-5 gy-2" v-for="item in store.sectionFood">

                    <img :src="`../../../src/assets/img/${item.img}`" alt="">
                    <h5 class="text-uppercase mt-4">{{ item.title }}</h5>
                    <div class="line mt-4"></div>
                    <p class="mt-4">{{ item.text }}</p>

                    <siteButton class="site_button mt-4">
                        {{ item.buttonText }}
                    </siteButton>
                    <!-- button component -->

                </div>
                <!-- iterazione per ottenere 3 colonne -->

                <!-- /.bottom -->
            </div>
        </div>
    </section>
    <!-- /.our_food -->


</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

.our_food {
    .row {
        padding: 0 8rem;
    }

    .col-5 {
        height: auto;

        img {
            width: 190px;
        }
    }

    .col-7 {
        .img_box {
            width: 100%;

            &:hover {
                transform: scale(105%);
                transition: ease-in-out 0.5s;
                box-shadow: 0.1rem 0 2rem 0.5rem $shadow;

            }
        }

        span {
            position: absolute;
            bottom: 1rem;
            right: calc(50% - (185px / 2));
            color: $light
        }
    }

    .bottom {
        margin-top: 8rem;

        .col {
            text-align: center;
        }

        .line {
            width: 50px;
            border-bottom: 2px solid $lightGray;
            margin: auto;
        }

        .site_button {
            background-color: $light;
            border: 1px solid $lightGray;

            &:hover {
                background-color: $dark;
                color: $light;
            }
        }
    }

}
</style>