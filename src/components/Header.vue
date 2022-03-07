<template>
  <header class="header">
        <div class="container">
            <div class="header__body">

                <div class="header__logo" @click="$router.push('/')" data-color="dark">
                    <div class="header__logo_1">NW<span>O</span>RK</div>
                    <div class="header__logo_2">INTERNATIONAL</div>
                    <!-- <img class="header__logo__img" src="Assets/images/header/logo.svg" alt="logo"> -->
                </div>

                <nav class="nav" id="nav">
                    <a class="nav__link" href="" @click="$router.push('/')">Главная</a>
                    <a class="nav__link" href="" @click="$router.push('/about')">О компании</a>
                    <a class="nav__link" href="products.html">Продукция</a>
                    <a class="nav__link" @click="$router.push('/#Reviews')" href="#Reviews">Отзывы о нас</a>
                    <a class="nav__link" href="" @click="$router.push('/contacts')">Контакты</a>
                </nav>

                <button class="menu" type="button" id="navToggle" data-color="dark">
                    <div class="barre"></div>
                </button>

            </div><!--header__body -->
        </div><!--container -->
    </header><!--header -->
</template>

<script>
export default {
 name: 'MainHeader',
}
</script>

<style lang="less">

    @black: #444;
    @blue: #1D46F6;
    @white: #fff;
    @notebook: ~"(max-width: 1200px)";
    @tablet: ~"(max-width: 960px)";
    @mobile: ~"(max-width: 790px)";
    @mobile-sm: ~"(max-width: 560px)";

.header {
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    position: relative;

    background-color: #fff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}

.header__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    @media @mobile {
        padding: 15px;
    }
}

.header__logo {
    cursor: pointer;
    text-transform: uppercase;
}

.header__logo_1 {
    font-weight: 700;
    font-size: 20px;

    span {
        color: @blue;
    }
}

.header__logo_2 {
    font-size: 16px;
}

.nav {
    display: flex;
    align-items: center;

    @media @mobile {
        display: none;

        height: auto;
        padding: 1rem;
        width: 100%;
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 1000;
        text-align: center;
        box-shadow: 0 5px 10px #373737;
        background-color: #fff;

        &.active {
            display: flex;
            flex-direction: column;
        }
    }
}

.nav__link {
    position: relative;
    padding: 11px 15px;

    text-decoration: none;
    font-weight: 500;
    font-size: 17px;
    color: #373737;
    line-height: 123%;
    border-radius: 2px;

    transition: all .2s ease-in-out;

    &.active {
        background-color: @blue;
        color: #fff;
    }

    &:hover {
        background-color: #e7e5e5;
    }

    &:focus, &:active {
        color: #fff;
        background-color: @blue;
    }

    @media @notebook {
        font-size: 16px;
    }

    @media @mobile {
        margin: 0 0 13px 0;

        &:last-child {
            margin: 0;
        }
    }
}

.menu {
    height: 22px;
    width: 30px;
    position: relative;
    text-decoration: none;
    background: none;
    display: none;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;

    @media @mobile {
        display: block;
    }
}

.barre, .barre:before, .barre:after {
    height: 3px;
    width: 27px;
    border-radius: 5px;
    background: @blue;
    position: absolute;
    top: 9px;
    left: 0;
    -webkit-transform-origin: 50%;
    -moz-transform-origin: 50%;
    -ms-transform-origin: 50%;
    -o-transform-origin: 50%;
    transform-origin: 50%;
    transition: .1s linear all;
}

.barre:before {
    content: "";
    top: -9px;
}

.barre:after {
    content: "";
    top: 9px;
}

.menu.active .barre {
    background: transparent;
}

.menu.active .barre:before {
    top: 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.menu.active .barre:after {
    top: 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    opacity: 1;
}
</style>