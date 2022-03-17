<template>
 <div class="slider__item">
   <div class="slider__img">
     <img :src="require('@/assets/images/reviews/' + item_data.img)" alt="" >
   </div>
   <div class="slider__text">{{ item_data.text }}</div>
   <div class="slider__name">{{ item_data.name }}</div>
  </div>
</template>

<script>

export default {
 name: 'MainSliderItem',

 props: {
  item_data: {
   type: Object,
   default: () => {}
  }
 },


}
</script>

<style>

</style>