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

    <section class="critics py-4 text-center">
        <h3 class="my-5 ">What critics are saying about us</h3>

        <div class="container my-4 p-2 text-start">
            <div class="row upper ">
                <div class="col-6 ps-5 h-100 text-end pe-0">
                    <img class="" src="../../assets/img/blog72x-600x687.jpg" alt="cooking woman">
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

            <div class="row row-cols-3 w-100 bottom ">

                <div class="col text-center" v-for="item in store.sectionFood">

                    <img :src="`../../../src/assets/img${item.img}`" alt="">
                    <h5 class="text-uppercase mt-4">{{ item.title }}</h5>
                    <div class="line mt-4"></div>
                    <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo
                        labore est nam
                        architecto velit ducimus autem tenetur.</p>

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
    <!-- /.critics -->

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

.description {
    background-color: $dark;
    padding: 8rem;

    &:hover {
        transform: scale(105%);
        transition: ease 0.5s;
        box-shadow: 0.1rem 0 2rem 0.5rem $shadow;

    }
}

.line {
    border-bottom: 1px solid $silver;
    width: 50px;
    height: min-content;
}

.col-6 {
    color: $silver;

    h2,
    .stars {
        color: $light;
    }

    .site_button {
        width: 50%;
        color: $light;
        border: 1px solid $silver;
        margin-top: 40px;

        &:hover {
            background-color: $light;
            color: $dark;
        }
    }

}
</style>
