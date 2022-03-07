<template>
<div class="advantage">
        <div class="container">

            <div class="section__heading">
                Наши преимущества
            </div>

                <div class="advantage__content">

                    <div class="advantage__item">
                        <div class="advantage__img">
                            <i class="fas fa-headphones-alt"></i>
                        </div>
                        <div class="advantage__title">
                            Доступность
                        </div>
                        <div class="advantage__text">
                            Прямой контакт с продавцом
                        </div>
                    </div>

                    <div class="advantage__item">
                        <div class="advantage__img">
                            <i class="fas fa-thumbs-up"></i>
                        </div>
                        <div class="advantage__title">
                            Качество
                        </div>
                        <div class="advantage__text">
                            Поставляется прямиком из Турции
                        </div>
                    </div>

                    <div class="advantage__item">
                        <div class="advantage__img">
                            <i class="fas fa-ruble-sign"></i>
                        </div>
                        <div class="advantage__title">
                            Низкая Цена
                        </div>
                        <div class="advantage__text">
                            Лучшие цены на рынке
                        </div>
                    </div>

            </div><!--advantage__content -->
        </div><!--container -->
    </div><!--advantage -->
</template>

<script>
export default {
 name: 'MainAdvantages'
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

.advantage {
    padding: 70px 0;
}

.advantage__content {
    display: flex;
    margin: 60px 0 0 0;

    @media (max-width: 890px) {
        justify-content: center;
        flex-wrap: wrap;
    }
}

.advantage__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 33%;
    margin-right: 5%;

    @media (max-width: 890px) {
        margin: 25px;
        width: auto;
        max-width: 250px;
    }

    &:last-child {
        margin-right: 0;

        @media (max-width: 890px) {
            margin: 25px;
            width: auto;
            max-width: 250px;
        }
    }

    &:hover {
        .advantage__img {
            background-color: @blue;
            i {
                color: #fff;
            }
            &::after {
                transform: scale(1);
                -webkit-transform: scale(1);
                opacity: 0;
            }
        }
    }
}

.advantage__img {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 94px;
    height: 94px;
    border-radius: 50%;
    border: 1px solid @blue;
    background-color: #fff;
    margin: 0 auto;
    transition: .6s all ease;

    i {
        font-size: 50px;
        color: @blue;
        transition: .6s all ease;
    }

    &::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        width: 140px;
        height: 140px;
        top: -25%;
        left: -25%;
        background-color: @blue;
        opacity: 1;
        transition: .6s all ease;
        transform: scale(0);
    }
}

.advantage__title {
    font-size: 20px;
    font-weight: 500;
    margin: 15px 0;
}

.advantage__text {
    font-size: 18px;
    color: #555
}
</style>