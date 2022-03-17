<template>
  <div class="footer">
        <div class="container">
            <div class="footer__content">

                <div class="footer__logo"  @click="$router.push('/')">
                    <div class="footer__logo_1">NW<span>O</span>RK</div>
                    <div class="footer__logo_2">INTERNATIONAL</div>
                </div>

                <nav class="nav__footer">
                    <a class="nav__link nav__link--footer"  href=""  @click="$router.push('/')">Главная</a>
                    <a class="nav__link  nav__link--footer" href=""  @click="$router.push('/about')">О компании</a>
                    <a class="nav__link  nav__link--footer" href="" @click="$router.push('/products')">Продукция</a>
                    <a class="nav__link  nav__link--footer" @click="$router.push('/#Reviews')" href="#Reviews">Отзывы о нас</a>
                    <a class="nav__link  nav__link--footer" href="" @click="$router.push('/contacts')">Контакты</a>
                </nav>

                <div class="topbar__col">
                    <div class="topbar__social topbar__social--footer"><a href=""><i class="fab fa-vk"></i></a></div>

                    <div class="topbar__social topbar__social--footer"><a href=""><i class="fab fa-instagram"></i></a></div>

                    <div class="topbar__social topbar__social--footer"><a href=""><i class="fab fa-youtube"></i></a></div>
                </div>

            </div><!--footer__content -->
        </div><!--container -->
    </div><!--footer -->
</template>

<script>
export default {
 name: 'MainFooter'
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

.footer {
    padding: 60px 0;
    background-color: rgb(46, 46, 46);
}

.footer__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer__logo {
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: center;
}

.footer__logo_1 {
    font-weight: 700;
    font-size: 23px;
    color: #fff;

    span {
        color: @blue;
    }
}

.footer__logo_2 {
    font-size: 19px;
    color: #fff;
}

.nav__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.nav__link {
    margin-bottom: 0;
    &--footer {
        color: #fff;

        &:hover {
            background-color: #e7e5e5;
            color: #373737;
        }

        &:focus, &:active {
            color: #fff;
            background-color: @blue;
        }
    }
}

.topbar__social {
    &--footer {
        &::after {
            right: -19px;
        }

        i {
            color: #fff;
        }
    }
}
</style>