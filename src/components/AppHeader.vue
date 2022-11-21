<script>
import navLinks from './data/links.js';
import SiteButton from './SiteButton.vue';
export default {
    name: 'AppHeader',
    components: {
        SiteButton,
    },
    data() {
        return {
            navLinks,
        }
    }
}


</script>

<template>

    <div id="site_header">

        <div class="container py-3">

            <nav class="header_navbar d-flex justify-content-between align-items-center">

                <div class="left_nav">
                    <img src="../assets/img/logo-restaurant-2x-300x58.png" alt="avada restaurant logo">
                </div>
                <!-- /.left_nav -->

                <div class="right_nav">
                    <a href="" v-for="link in navLinks">{{ link }}</a>
                    <!-- modificare cart con font owesome -->
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

                        <h6 class="text-uppercase">the best table in town</h6>
                    </div>
                    <div class="text">
                        <h1 class="text-uppercase py-4">fine dining experience</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit quia
                            cumque
                            quae iste quas cupiditate quibusdam quaerat.</p>

                    </div>

                    <siteButton class="site_button">
                        explore the menu
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

    a {
        margin-left: 2rem;
        text-decoration: none;
        color: $silver;

        &:hover {
            color: $light;
        }
    }

    .col-3 {
        color: $silver;
    }

    .row {
        margin: 100px 0
    }

    .line {
        border-bottom: 1px solid $silver;
        width: 50px;
        height: min-content;
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
</style>
