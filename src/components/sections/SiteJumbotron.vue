<script>
import { store } from '../../store.js';
export default {
    name: 'SiteJumbotron',

    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section class="jumbotron w-100">
        <div class="container d-flex justify-content-center align-items-end h-100 mb-4">
            <span> kung pao chicken - $32</span>
        </div>

    </section>
    <!-- /.jumbotron -->

</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

.jumbotron {
    background-image: url(../../assets/img/page52x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    height: 580px;

    span {
        color: $light;
        margin-bottom: 1.5rem;
    }
}
</style>