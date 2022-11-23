<script>
import { store } from '../store.js'
import SiteButton from './SiteButton.vue';
export default {
    name: 'AppHeader',
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

    <div id="site_header">
        <div class="right_tags">
            <div class="square rounded-1 text-center">
                <div class="small_square rounded-1"></div>
                <span>Demos</span>
            </div>
            <div class="square rounded-1 text-center mt-2">
                <h3><span>$</span>39</h3>
                <span>On Sale</span>
            </div>
        </div>
        <!-- /.right_tags -->

        <div class="container py-3 gx-0">

            <nav class="header_navbar d-flex justify-content-between align-items-center">

                <div class="left_nav">
                    <img src="../assets/img/logo-restaurant-2x-300x58.png" alt="avada restaurant logo">
                </div>
                <!-- /.left_nav -->

                <div class="right_nav d-flex">

                    <div class="links ms-2" v-for="link in store.headerLinks">
                        <a :class="link === 'Home' ? 'active' : ''" href=""
                            v-if="link !== 'Takeout' && link !== 'Cart'">{{
                                    link
                            }}</a>
                        <a href="" v-else-if="link === 'Cart'">
                            <font-awesome-icon icon="fa-solid fa-shopping-cart" />
                        </a>
                        <a href="" v-else>{{ link }}<span class="new ms-2">New</span></a>
                        <!-- singolo link -->
                    </div>

                </div>
                <!-- /.right_nav -->

            </nav>
            <!-- /.header_navbar -->

            <div class="row">
                <div class="col-1">
                    <div class="line me-5 mt-2"></div>
                </div>
                <!-- /.col-1 -->

                <div class="col-3">
                    <div class="slogan">

                        <h6 class="text-uppercase slogan">{{ store.infoTable.title }}</h6>
                    </div>
                    <div class="text">
                        <h1 class="text-uppercase py-5">{{ store.infoTable.slogan }}</h1>
                        <p>{{ store.infoTable.text }}</p>

                    </div>

                    <siteButton class="site_button">
                        {{ store.infoTable.buttonText }}
                    </siteButton>
                    <!-- button component -->

                </div>
                <!-- /.col-3 -->
            </div>

        </div>
        <!-- /.header_navbar -->

    </div>
    <!-- /#site_header -->

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

#site_header {
    background-color: $dark;
    background-image: url(../assets/img/slider52x.jpg);
    background-position: right;
    background-size: 60%;
    background-repeat: no-repeat;
    position: relative;
    height: 930px;

    .container {
        margin: 0 auto;
        margin: 0 auto
    }

    .right_tags {
        position: absolute;
        right: 20px;
        top: 100px;


        .square {
            width: 60px;
            aspect-ratio: 1/1;
            background-color: $light;
            padding-top: 1rem;

            span {
                font-size: 12px;
                font-weight: bold;
            }

            h3 {
                color: $price;
                font-weight: bold;
                position: relative;
                line-height: 0;
                font-family: 'Roboto', sans-serif;
                font-size: 25px;

                span {
                    position: absolute;
                    top: -6px;
                    left: 8px
                }
            }

            .small_square {
                width: 20px;
                aspect-ratio: 1/1;
                margin: 0 auto;
                background-color: $squareTag;
            }
        }
    }

    a {
        font-weight: bold;
        margin-left: 1rem;
        text-decoration: none;
        color: $silver;

        &:hover {
            color: $light;
        }
    }

    .new {
        border: 1px solid $silver;
        padding: 0.2rem 0.5rem;
        font-size: 12px;
        font-weight: bold;
    }

    .col-3 {
        color: $silver;
    }

    .row {
        margin: 145px 0;
    }

    .line {
        border-bottom: 1px solid $silver;
        width: 50px;
        height: min-content;
    }

    .site_button {
        color: $silver;
        border: 1px solid $silver;
        margin-top: 40px;

        &:hover {
            background-color: $light;
            color: $dark;
        }
    }

    .active {
        color: $light;
    }
}
</style>
