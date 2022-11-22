<script>
import { store } from '../../store.js';
import SiteButton from '../SiteButton.vue';
export default {
    name: 'CriticsAbtUs',
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

    <section class="critics py-4 text-center d-flex flex-column text-center">
        <h3 class="mt-5">What critics are saying about us</h3>
        <div class="line my-4 align-self-center mb-3"></div>
        <div class="container my-4 p-2 text-start">

            <div class="row upper w-100">

                <div class="col-6 h-100 text-end gy-0 px-0">
                    <img class="w-100" src="../../assets/img/blog72x-600x687.jpg" alt="cooking woman">
                </div>
                <!-- /.col-6 -->
                <div class="description col-6 d-flex flex-column justify-content-between">
                    <span class="py-2 text-uppercase fw-bold">meggy stewart</span>
                    <h2 class="text-uppercase  my-2">new york times</h2>

                    <div class="stars d-flex gap-2">
                        <span class="my-2" v-for="index in 5">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </span>
                    </div>
                    <!-- /.stars -->

                    <div class="line my-4"></div>

                    <p class="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto accusamus
                        molestias
                        repudiandae hic iure inventore dolor dolores repellendus consequatur?</p>
                    <p class="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto accusamus
                        molestias.</p>

                    <siteButton class="site_button mt-4">
                        read full article
                    </siteButton>
                    <!-- button component -->
                </div>
                <!-- /.col-6 -->

            </div>
            <!-- /.upper-->

            <div class="row row-cols-2 w-100 bottom mt-4 w-100">

                <div class="col position-relative" v-for="critic in store.critics">
                    <div class="text_box">
                        <span class="text-uppercase">{{ critic.name }}</span>
                        <h2 class="text-uppercase mt-4">{{ critic.magazine }}</h2>

                        <div class="stars d-flex gap-2">
                            <span class="my-2" v-for="index in 5">
                                <font-awesome-icon icon="fa-solid fa-star" />
                            </span>
                        </div>
                        <!-- /.stars -->

                        <div class="line mt-4"></div>
                        <p class="mt-4">{{ critic.text }}</p>

                        <siteButton class="site_button mt-4">
                            {{ critic.buttonText }}
                        </siteButton>
                        <!-- button component -->
                    </div>
                    <div class=" position-relative">
                        <img class="" :src="`../../../src/assets/img${critic.img}`" alt="eating woman">
                        <div class="layer h-100 w-100">

                        </div>
                    </div>
                </div>
                <!-- iterazione per ottenere 3 colonne -->

                <!-- /.bottom -->
            </div>
        </div>
    </section>
    <!-- /.critics -->

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

.description {
    background-color: $dark;
    padding: 8rem;

    &:hover {
        transform: scale(105%);
        transition: ease-in-out 0.5s;
        box-shadow: 0.1rem 0 2rem 0.5rem $shadow;

    }
}

.line {
    border-bottom: 1px solid $silver;
    width: 50px;
    height: min-content;
}

.col-6,
span,
.text_box p,
h2,
.stars {
    color: $light;
}

.site_button {
    width: fit-content;
    color: $silver;
    border: 1px solid $silver;
    margin-top: 40px;

    &:hover {
        background-color: $light;
        color: $dark;
    }
}



.bottom {

    .layer {
        background-image: linear-gradient($dark, rgba(255, 255, 255, 0));
        position: absolute;
        top: 0;

    }

    .col:first-child {
        padding-left: 0
    }

    .col:last-child {
        padding-right: 0
    }

    .text_box {
        color: $light;
        position: absolute;
        top: 30%;
        margin: 0 7rem;
        z-index: 5;
    }

}
</style>
