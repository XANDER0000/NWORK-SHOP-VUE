<template>
<div class="select">
 <p class="select__main" @click="areCategoriesVisible = !areCategoriesVisible">{{ selected }}</p>
 <div class="select__category" v-if="areCategoriesVisible">
  <p v-for="category in categories" :key="category.value" @click="selectCategory(category)">
   {{category.name}}
  </p>
 </div>
</div>
</template>

<script>
export default {
 name: 'MainCategory',

 props: {
  categories: {
   type: Array,
   default() {
    return []
   }
  },

  selected: {
   type: String,
   default: '',
  },


 },

 data: () => ({
  areCategoriesVisible: false,
 }),



 methods: {
   selectCategory(category) {
       this.areCategoriesVisible = false
       this.$emit('select', category)
     },
 },

}
</script>

<style lang="less" scoped>

p {
 margin: 0;
 width: 180px;
}

.select {
 margin: 0 0 0 15px;
 cursor: pointer;
 transition: all .2s ease-in-out;
 position: relative;

 .select__main {
  border: 1px solid rgba(68, 68, 68, 0.3);
  padding: 9.7px 0 9.7px 8px;
  margin: 0;
 }

 &:hover {
  border-color:rgba(29, 70, 246, 0.3);
  -webkit-box-shadow: 0px 5px 8px 2px rgba(29, 70, 246, 0.3);
  -moz-box-shadow: 0px 5px 8px 2px rgba(29, 70, 246, 0.3);
  box-shadow: 0px 3px 8px 0px rgba(29, 70, 246, 0.3);
}

}

.select__category {
 position: absolute;
 left: 0;
 top: 0;
 background-color: #fff;
 width: 100%;
 border: 1px solid rgba(68, 68, 68, 0.3);
 width: 180px;

 p {
  padding: 5px 0 5px 5px;

  &:hover {
   color: rgba(29, 70, 246, 1);
  }
 }
}

</style>