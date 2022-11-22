<script>
import { store } from '../../store.js';

export default {
    name: 'MenuTakeout',
    components: {

    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section class="menu_takeout">
        <div class="container_large">
            <div class="row row-cols-3">

                <div class="col px-0" v-for="page in store.menu">
                    <div v-show="page.title === 'main course'" class="layer h-100 w-100"></div>
                    <div class="menu_box p-5">
                        <h2 class="py-5">{{ page.title }}</h2>

                        <div class="menu_plate" v-for="plate in page.plates">
                            <div class="plate_info d-flex justify-content-between mb-3">
                                <h4>{{ plate.name }}</h4><span>{{ plate.price }}</span>
                            </div>
                            <p>{{ plate.description }}</p>
                        </div>
                        <!-- iterazione per generare le info sui 3 menu -->

                    </div>

                </div>
                <!-- iterazione per generare 3 colonne, ognuna col proprio titolo -->
            </div>
        </div>

    </section>
    <!-- /.menu_takeout-->

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

.menu_takeout {
    margin-top: 7rem;
    margin-bottom: 7rem;

    .container_large {
        margin: 0 auto;
        width: 75%;
    }

    .col {
        height: 800px;
    }

    span {
        font-weight: bold;
    }

    .col:nth-child(2) {
        margin-top: -2.5rem;
        background-image: url(../../assets/img/misc22x.jpg);
        background-size: cover;
        background-position: bottom;
        position: relative;

        .menu_box {
            position: absolute;
            top: 0;
            color: $light;

            p,
            span {
                color: $silver;
            }
        }

        .layer {
            background: linear-gradient($dark 40%, rgba(255, 255, 255, 0));
        }

    }



    .col:first-child,
    .col:last-child {
        background-color: $lightGray;
    }

    h2,
    h4 {
        text-transform: uppercase;
    }
}
</style>