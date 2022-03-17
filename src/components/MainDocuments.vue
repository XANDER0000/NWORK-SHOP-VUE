<template>
  <div class="documents">
        <div class="container">
            <div class="section__heading">
                Наши документы и сертификаты
            </div>
            <div class="documents__wrapper">
                <document-item
                v-for="document in documents"
                :key="document.id"
                :document_data="document"
                />
            </div><!--documents__wrapper-->
        </div><!--container -->
    </div><!--documents -->
</template>

<script>

import DocumentItem from './DocumentItem.vue';

export default {
 name: 'MainDocuments',

 components: {
    DocumentItem
 },

 props: {

 },

  data() {
   return {
   documents: [
  {
   image: "2z2kat9wdqcksk4cgw8okcs40sokgg.png",
   id: 1,
  },
  {
   image: "2z2kat9wdqcksk4cgw8okcs40sokgg.png",
    id: 2,
  },
  {
   image: "2z2kat9wdqcksk4cgw8okcs40sokgg.png",
    id: 3,
  },
  {
   image: "2z2kat9wdqcksk4cgw8okcs40sokgg.png",
    id: 4,
  },
  {
   image: "2z2kat9wdqcksk4cgw8okcs40sokgg.png",
    id: 5,
  },
  {
   image: "2z2kat9wdqcksk4cgw8okcs40sokgg.png",
    id: 6,
  },
  {
   image: "2z2kat9wdqcksk4cgw8okcs40sokgg.png",
    id: 7,
  },
  {
   image: "2z2kat9wdqcksk4cgw8okcs40sokgg.png",
    id: 8,
  },
 ],

    IsPopupVisible: false
  }
 },

};

</script>

<style lang="less">
// Documents =======================

.documents {
    padding: 60px 0;
    background-color: #f8f9fa;
}

.documents__wrapper {
    display: flex;
    justify-content: center;
    margin: 60px -25px 0 -25px;
    flex-wrap: wrap;
}

.documents__item {
    cursor: pointer;
    width: 20%;

    max-height: 370px;
    margin: 25px;

    @media (max-width: 860px) {
        margin: 10px;
    }

    @media (max-width: 760px) {
        width: 33.33333%;
    }
}

.documents__image {
    width: 100%;
    max-height: 100%;
}
</style>