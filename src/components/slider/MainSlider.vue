<template>
<div class="slider">
 <main-slider-item v-for="item in slider_data" :key="item.id" :item_data="item"/>
</div><!--slider -->

<swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
     <swiper-slide>
      <div class="slider__item">
       <div class="slider__img">
         <img :src="require('@/assets/images/reviews/' + slider_data.img)" alt="" >
       </div>
        <div class="slider__text">{{ slider_data.text }}</div>
        <div class="slider__name">{{ slider_data.name }}</div>
      </div>
    </swiper-slide>
    <swiper-slide><main-slider-item v-for="item in slider_data" :key="item.id" :item_data="item"/></swiper-slide>
    <swiper-slide><main-slider-item v-for="item in slider_data" :key="item.id" :item_data="item"/></swiper-slide>
  </swiper>

</template>

<script>
import MainSliderItem from "@/components/slider/MainSliderItem.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/less';

export default {
 name: 'MainSlider',

 components: {
  MainSliderItem,Swiper,
      SwiperSlide,
 },

 props: {
  slider_data: {
   type: Array,
   default: () => []
  }
 },
}
</script>

<style>

</style>