<script>

import SiteButton from '../SiteButton.vue';
export default {
    name: 'InfoComponent',
    props: {
        title: String,
        slogan: String,
        text: String,
        button: String
    },
    components: {
        SiteButton,
    },
}

</script>

<template>

    <div class="container">
        <div class="row w-100 d-flex justify-content-end ">
            <div class="col-1">
                <div class="line me-5 mt-2"></div>
            </div>
            <!-- /.col-1 -->

            <div class="col-3">
                <div class="slogan">

                    <h6 class="text-uppercase">{{ slogan }}</h6>
                </div>
                <div class="text">
                    <h2 class="text-uppercase py-4">{{ title }}</h2>
                    <p>{{ text }}</p>

                </div>

                <siteButton class="site_button">
                    <span class="me-2" v-show="button === 'view takeout menu'">
                        <font-awesome-icon icon="fa-solid fa-car" />
                    </span>
                    {{ button }}

                </siteButton>
                <!-- button component -->

            </div>
            <!-- /.col-3 -->
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

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
        color: $silver;
        border: 1px solid $silver;
        margin-top: 40px;

        &:hover {
            background-color: $light;
            color: $dark;
        }
    }
}
</style>

