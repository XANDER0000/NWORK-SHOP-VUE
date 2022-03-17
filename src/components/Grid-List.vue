<template>
<div class="settings__grid">
        <div class="settings__grid_item">
         <svg class="settings__grid_icon"
         @click="doGrid"
         :class="{active: layout == 'grid'}"
          xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#444"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
        </div>

        <div class="settings__grid_item" >
         <svg class="settings__grid_icon"
         @click="doList"
         :class="{active: layout == 'list'}"
         xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#444"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
        </div>
</div>
</template>

<script>

export default {
 name: 'Grid-List',

 components: {
 },

 data: () => ({
   layout: 'grid',


 }),

 props: {

 },

 methods: {
   doList() {
     this.layout = 'list';
     this.$emit('doList', this.layout);
   },

   doGrid() {
     this.layout = 'grid';
     this.$emit('doGrid', this.layout)
   },

 }
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

   .settings {
    padding: 40px 0;
   }

   .settings__wrapper {
    display: flex;
   }

   .settings__grid {
    display: flex;
   }

   .settings__grid_item {
    margin: 0 10px 0 0;
   }

   .settings__grid_icon {
    cursor: pointer;
    transition: all .2s ease-in-out;
    border: 1px solid rgba(#444, .3) ;

    &.active {
      fill: @blue;
      border-color: rgba(#1D46F6, .3);
    }

    &:focus {
     fill: @blue;
     border-color: rgba(#1D46F6, .3);
    }
   }

   .settings__col {
     display: flex;
     align-items: center;
   }
</style>