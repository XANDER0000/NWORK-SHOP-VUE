<template>
  <div class="popular">
        <div class="container">
            <div class="section__heading">
                Популярные товары
            </div>

            <div class="popular__content">

                <div class="popular__item">
                    <div class="popular__img">
                        <img src="@/assets/images/products/1.png" alt="">
                    </div>

                    <div class="popular__inner">
                        <div class="popular__title"><a href="">ЧЁРНЫЙ КОФЕ С ТМИНОМ (РАСТВОРИМЫЙ) 200ГР</a></div>
                        <div class="popular__description">НАПИТКИ</div>
                    </div>

                    <div class="popular__btn">
                        <button onclick="window.location.href='products.html'" class="btn" type="button" id="">
                            Подробнее
                        </button>
                    </div>

                </div>

                <div class="popular__item">
                    <div class="popular__img">
                        <img src="@/assets/images/products/2.jpeg" alt="">
                    </div>

                    <div class="popular__inner">
                        <div class="popular__title"><a href="">МАСЛО ЧЕРНОГО ТМИНА (В КАПСУЛАХ)</a></div>
                    </div>

                    <div class="popular__btn">
                        <button onclick="window.location.href='products.html'" class="btn" type="button" id="">
                            Подробнее
                        </button>
                    </div>

                </div>

                <div class="popular__item">
                    <div class="popular__img">
                        <img src="@/assets/images/products/1.png" alt="">
                    </div>

                    <div class="popular__inner">
                        <div class="popular__title"><a href="">ЧЁРНЫЙ КОФЕ С ТМИНОМ (РАСТВОРИМЫЙ) 200ГР</a></div>
                        <div class="popular__description">НАПИТКИ</div>
                    </div>

                    <div class="popular__btn">
                        <button onclick="window.location.href='products.html'" class="btn" type="button" id="">
                            Подробнее
                        </button>
                    </div>

                </div>

            </div><!--popular__content -->

        </div><!--container -->
    </div><!--popular -->
</template>

<script>
export default {
 name: 'MainPopular'
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

.popular {
    padding: 60px 0;
    background-color: #f8f9fa;
}

.popular__content {
    display: flex;
    margin: 60px 0 0 0;

    @media (max-width: 890px) {
        justify-content: center;
        flex-wrap: wrap;
    }
}

.popular__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    width: 33%;
    margin-right: 5%;
    padding: 20px 15px 13px 15px;
    height: 435px;

    @media (max-width: 890px) {
        margin: 25px;
        width: auto;
        max-width: 250px;
    }

    &:last-child {
        margin-right: 0;
    }
}

.popular__img {
    margin: 0 -15px;
    img {
        max-width: 100%;
        height: 250px;
    }
}

.popular__inner {
    text-overflow: ellipsis;
    margin-top: 18px;
    max-width: 320px;
    max-height: 138px;
    text-transform: uppercase;
    flex-grow: 1;
}

.popular__title {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    max-height: 58px;
    text-overflow: ellipsis;
    overflow: auto;

    a {
        text-decoration: none;
        color: @black;
    }
}

.popular__description {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 400;
    text-overflow: ellipsis;
}
</style>