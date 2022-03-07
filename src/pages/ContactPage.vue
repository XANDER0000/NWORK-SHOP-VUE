<template>
<div id="">
 <TopBar/>
 <MainHeader/>
 <main-intro introTitle="Контактные данные компании NWORK"/>
 <main-contacts/>
 <main-footer/>
</div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import MainHeader from '@/components/Header.vue'
import MainFooter from '@/components/MainFooter.vue'
import MainIntro from '@/components/MainIntro.vue'
import MainContacts from '@/components/MainContacts.vue'
export default {
 name: 'AboutPage',
  components: {
    TopBar, MainHeader, MainFooter, MainIntro, MainContacts,
  },
}
</script>

<style>

</style>