<template>
<div id="">
 <TopBar/>
 <MainHeader/>
 <main-intro introTitle="Отзывы о компании NWORK"/>
 <main-about/>
 <main-product-info/>
 <main-reviews/>
 <main-footer/>
</div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import MainHeader from '@/components/Header.vue'
import MainAbout from '@/components/MainAbout.vue'
import MainFooter from '@/components/MainFooter.vue'
import MainIntro from '@/components/MainIntro.vue'
import MainReviews from '@/components/MainReviews.vue'
import MainProductInfo from '@/components/MainProductInfo.vue'
export default {
 name: 'AboutPage',
  components: {
    TopBar, MainHeader, MainAbout, MainFooter, MainIntro,
    MainReviews, MainProductInfo
  },
}
</script>

<style>

</style>