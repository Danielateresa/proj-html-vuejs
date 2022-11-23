<script>
import { store } from '../../store.js';

export default {
    name: 'NewsPromotions',

    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section class="news_promotions py-4 text-center d-flex flex-column text-center">
        <h3 class="mt-5">Latest news & promotions</h3>
        <div class="line my-4 align-self-center mb-3"></div>
        <div class="container my-4 p-2 d-flex flex-column text-center">
            <div class="row row-cols-3 w-100 bottom ">

                <div class="col text-center" v-for="data in store.news">
                    <div class="card_col position-relative">
                        <div class="default_layer">
                            <img :src="`../../../src/assets/img${data.img}`" alt="{{ data.title }}">
                            <h5 class="text-uppercase mt-4">{{ data.title }}</h5>
                            <p class="mt-4">{{ data.text }}</p>
                        </div>

                        <div class="overlay h-100">
                            <div class="layer h-100 w-100"></div>
                            <img class="w-100 h-100" :src="`../../../src/assets/img${data.img}`" alt="{{ data.title }}">
                            <h5 class="text-uppercase mt-4">{{ data.title }}</h5>
                        </div>
                    </div>
                </div>
                <!-- iterazione per ottenere 3 colonne -->

            </div>
        </div>
    </section>
    <!-- /.news_promotions -->

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

.line {
    border-bottom: 1px solid $silver;
    width: 50px;
    height: min-content;
}

.overlay {


    opacity: 0;

    .layer {
        background-image: linear-gradient($dark, rgba(255, 255, 255, 0));
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
    }

    h5 {
        color: $light;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: max-content;
        z-index: 3;
    }
}

.card_col:hover .overlay {
    opacity: 1;
    transition: ease-in-out 0.1s;
}
</style>