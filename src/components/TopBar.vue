<template>
 <div class="topbar">
        <div class="container">
            <div class="topbar__inner">
                <div class="topbar__col">
                    <div class="topbar__phone_img"><i class="fas fa-phone-volume"></i></div>

                    <a class="topbar__phone" href="">+7(999) 000 9900</a>
                </div>
                <div class="topbar__col">
                    <div class="topbar__social"><a href=""><i class="fab fa-vk"></i></a></div>

                    <div class="topbar__social"><a href=""><i class="fab fa-instagram"></i></a></div>

                    <div class="topbar__social"><a href=""><i class="fab fa-youtube"></i></a></div>
                </div>

            </div><!--topbar__inner -->
        </div><!--container -->
    </div><!--topbar -->
</template>

<script>
    export default {
    name: 'TopBar',

    }
</script>

<style lang="less">

    @black: #444;
    @blue: #1D46F6;
    @white: #fff;

.topbar {
    background-color: #fff;
}

.topbar__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
}

.topbar__col {
    display: flex;
    align-items: center;
}

.topbar__phone_img {
    margin-right: 10px;
    i {
        color: #1D46F6;
    }

    @media (max-width: 300px) {
        margin-right: 5px;
    }
}

.topbar__phone {
    position: relative;
    text-decoration: none;
    color: @black;
    font-size: 15px;
    transition: all .2s ease-in-out;

    &:hover {
        color: @blue;
    }

    @media (max-width: 300px) {
        font-size: 13px;
    }
}

.topbar__social {
    position: relative;
    margin-right: 40px;

    &::after {
        content: "";
        text-decoration: none;
        display: block;
        position: absolute;
        right: -18px;
        top: -45%;
        height: 45px;
        width: 1px;
        background-color: #c9c7c7;

        @media (max-width: 300px) {
            right: -11px;
        }
    }

    &:last-child {
        margin-right: 0;

        &::after {
            display: none;
        }
    }

    i {
        font-size: 19px;
        color: @black;
        transition: all .2s ease-in-out;
        padding: 3px;

        &:hover {
            color: @blue;
        }
    }

    @media (max-width: 300px) {
        margin-right: 20px;
    }
}
</style>