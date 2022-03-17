<template>
<div class="documents__item" @click="ShowPopupInfo">
      <img class="documents__image"
      :src="require('@/assets/images/documents/' + document_data.image)"
      alt="" >
</div>

<document-popup v-if="IsPopupVisible" @ClosePopup="ClosePopup">
 <img class="documents__image"
      :src="require('@/assets/images/documents/' + document_data.image)"
      alt="" >
</document-popup>
</template>

<script>
import DocumentPopup from '@/components/modal/DocumentPopup.vue';

export default {
 name: 'DocumentItem',
 components: {
  DocumentPopup,
 },

 props: {
  document_data: {
   type: Object,
   default() {
    return {}
   }
  }
 },

 data() {
  return {
   IsPopupVisible: false
  }
 },

 methods: {
     ShowPopupInfo() {
         this.IsPopupVisible = true;
         document.body.classList.add('no-scroll');
     },

     ClosePopup() {
         this.IsPopupVisible = false;
         document.body.classList.remove('no-scroll');
     }
 }
}
</script>

<style>

</style>