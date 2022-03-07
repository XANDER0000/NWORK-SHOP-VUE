<template>
  <div class="video">
   <div class="section__heading">
    Описание и лечебные свойства тмина
   </div>
       <div class="container">
        <div class="video__wrapper">
         <iframe src="https://www.youtube.com/embed/ASIq4zKnW3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       </div>
  </div>
</template>

<script>
export default {
 name: 'MainProductInfo'
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


    .video {
     padding: 60px 0;
    }

    .video__wrapper {
     margin: 80px 0 0 0;
     text-align: center;

     iframe {
      width: 790px;
      height: 470px;
       @media (max-width: 790px) {
        width: 100%;
        height: 300px;
       }
     }
    }

</style>