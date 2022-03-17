<template>
  <div class="reviews" id="Reviews">
        <div class="section__heading">
            Отзывы о Нас
        </div>
        <div class="container">
            <div class="slider">
            <swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="50"
                    navigation
                    :pagination="{ clickable: true }"
                    :loop="true"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                >
                    <swiper-slide>
                        <div class="slider__item">
                                <div class="slider__img">
                                    <img src="@/assets/images/reviews/1.jpeg" alt="">
                                </div>
                                <div class="slider__text">Работаем с данной фирмой уже довольно давно. Никаких нареканий, одни положительные впечатления. Будем продолжать сотрудничество.</div>
                                <div class="slider__name">- Ольга</div>
                            </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="slider__item">
                            <div class="slider__img">
                                <img src="@/assets/images/reviews/2.png" alt="">
                            </div>
                            <div class="slider__text">Сайт понравился. Спасибо менеджерам за творческий подход! Буду рекомендовать всем друзьям и близким.</div>
                            <div class="slider__name">- Василий</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="slider__item">
                            <div class="slider__img">
                                <img src="@/assets/images/reviews/3.jpg" alt="">
                            </div>
                            <div class="slider__text">Сайт просто супер. Ребята молодцы, делают свою работу на высоком уровне. Товары всегда новые, цены вполне доступные. Часто проводятся скидки, акции, что особо радует :) </div>
                            <div class="slider__name">- Андрей</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div><!--container -->
    </div><!--reviews -->
</template>

<script>
 // import Swiper core and required modules
  import { Pagination, } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/less';
  import 'swiper/less/pagination';
export default {
 name: 'MainReviews',

 components: {
     Swiper,
      SwiperSlide,
 },

 data() {
  return {
  }
 },

 setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [ Pagination, ],
      };
    },
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

.reviews {
    padding: 60px 0;
    overflow: hidden;
}

.slider {
    margin-top: 60px;
    display: flex;
}

.swiper-pagination-bullet {
    height: 12px;
    width: 12px;
    background-color: #1D46F6;
}

.slider__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 30px;
}

.slider__img {
    width: 80px;
    height: 80px;
    text-align: center;
    overflow: hidden;
    margin-bottom: 20px;
    border-radius: 50%;

    img {
        width: 100%;
        height: auto;
    }
}

.slider__text {
    font-size: 18px;
    line-height: 150%;
    color: rgb(36, 35, 35);
    margin-bottom: 20px;

    max-height: 130px;
    overflow-y: auto;
}

.slider__name {
    font-size: 19.5px;
    color: #333;
    font-weight: 700;
}

.slick-dots {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;

    li {
        margin: 0 5px;

        &.slick-active {
            button {
                background-color: @blue;
            }
        }
    }

    button {
        width: 15px;
        height: 15px;
        padding: 0;
        border: 1px solid;
        border-radius: 50%;
        background: transparent;
        background-color: #7B7B7B;
        font-size: 0;
        color: transparent;
        cursor: pointer;
    }

}
</style>