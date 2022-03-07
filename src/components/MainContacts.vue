<template>
<div class="contacts">
 <div class="container">
  <div class="contacts__wrapper">
   <div class="contacts__col">
    <div>
      <div class="contacts__col_icon">

     </div>
    </div>
    <div class="contacts__col_phone">
      <div class="contacts__col_text">
      Позвоните нам
     </div>
     <a href="">+7(999) 000 9900</a>
     <a href="">+7(999) 000 9900</a>
    </div>
   </div>

  <div class="contacts__col">
      <div class="contacts__col_icon">

     </div>

    <div class="contacts__col_phone">
      <div class="contacts__col_text">
      Напишите нам
     </div>
     <a href="">nwork.international@mail.ru</a>
     <a href="">nwork.international@mail.ru</a>
    </div>
   </div>

  </div>
 </div>
</div>
</template>

<script>


export default {
 name: 'MainContacts',

 components: {

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

    .contacts {
     padding: 60px 0;
    }

    .contacts__wrapper {
     display: flex;
     justify-content: space-around;

     @media (max-width: 500px) {
      align-items: center;
      flex-direction: column;
      text-align: center;
     }
    }

    .contacts__col {
     display: flex;

     @media (max-width: 500px) {
      margin: 0 0 30px 0;

      &:last-child {
        margin: 0;
      }
     }
    }

    .contacts__col_phone {
     display: flex;
     flex-direction: column;
     font-size: 18px;

     a {
      margin: 0 0 10px 0;
      text-decoration: none;
      color: @black;

      &:hover {
       text-decoration: underline;
      }
     }
    }

    .contacts__col_icon {
     position: absolute;
     left: 0px;
     img {
      width: 23px;
     }
    }

    .contacts__col_text {
     font-size: 20px;
     margin-bottom: 20px;
     width: 250px;
     position: relative;

     &::before {
      left: 0;
      top: 0;
      position: absolute;
     }
    }
</style>