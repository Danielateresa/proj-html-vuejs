<script>
export default {
    name: 'AppFooter',
}

</script>

<template>

    <footer id="site_footer">

        <div class="footer_content text-center">
            <img src="../assets/img/logo-restaurant-2x-300x58.png" alt="logo Restaurant">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto nam? Quis,
                repudiandae.
                Ea quia iste quisquam quae corrupti minima?</p>
            <div class="social">
                <span class=" round_box">
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
                </span>
                <span class="round_box">
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                </span>
                <span class="round_box">
                    <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
                </span>
                <span class="round_box">
                    <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                </span>
                <span class="round_box">
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
                </span>
            </div>
        </div>
        <div class="bottom_bar py-5">
            Copyright 2022 - Daniela Teresa de Leo | All right reserved
        </div>
    </footer>
    <!-- /#site_footer -->

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

#site_footer {
    background-image: url(../assets/img/footer2x.jpg);
    background-repeat: no-repeat;
    background-size: contain;


    .bottom_bar {
        text-align: center;
        background-color: $dark;
        color: $silver;

    }
}

.footer_content {
    width: 30%;
    margin: 0 auto;
    padding: 10rem 0;

    p {
        margin: 5rem 0;
        color: $silver;
    }

    .social {

        color: $dark;
        margin-bottom: 3.5rem;

        .round_box {
            display: inline-block;
            width: 50px;
            aspect-ratio: 1/1;
            background-color: $light;
            border-radius: 50%;
            margin: 0 0.5rem
        }

        .icon {
            margin-top: 1rem;
        }
    }


}
</style>