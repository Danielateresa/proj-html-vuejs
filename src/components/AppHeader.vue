<script>
import navLinks from './data/links.js';


export default {
    name: 'AppHeader',
    data() {
        return {
            navLinks,
        }
    }
}


</script>

<template>

    <div id="site_header">

        <div class="container py-4">

            <nav class="header_navbar d-flex justify-content-between">

                <div class="left_nav">
                    <img src="../assets/img/logo-restaurant-2x-300x58.png" alt="avada restaurant logo">
                </div>
                <!-- /.left_nav -->

                <div class="right_nav">
                    <a href="" v-for="link in navLinks">{{ link }}</a>


                </div>
                <!-- /.right_nav -->

            </nav>
            <!-- /.header_navbar -->

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
    height: 500px;

    a {
        margin-left: 2rem;
        text-decoration: none;
        color: $silver;
    }
}
</style>
