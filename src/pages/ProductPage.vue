<template>
<div id="">
 <TopBar/>
 <MainHeader/>
 <main-intro introTitle="Продукция компании NWORK"/>
 <main-catalog/>
 <main-footer/>
</div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import MainHeader from '@/components/Header.vue'
import MainFooter from '@/components/MainFooter.vue'
import MainIntro from '@/components/MainIntro.vue'
import MainCatalog from '@/components/MainCatalog.vue'
export default {
 name: 'ProductPage',
  components: {
    TopBar, MainHeader, MainFooter, MainIntro, MainCatalog
  },
}
</script>

<style>

</style>