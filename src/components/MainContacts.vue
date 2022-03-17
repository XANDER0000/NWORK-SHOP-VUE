<template>
<div class="contacts">
 <div class="container">
  <div class="contacts__wrapper">
   <div class="contacts__col">
    <div class="contacts__col_phone">
      <div class="contacts__col_text">
      Позвоните нам
     </div>
     <a href="">+7(999) 000 9900</a>
     <a href="">+7(999) 000 9900</a>
    </div>
   </div>

  <div class="contacts__col">
    <div class="contacts__col_phone">
      <div class="contacts__col_text two">
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

     @media (max-width: 600px) {
      align-items: center;
      flex-direction: column;
      text-align: center;
     }
    }

    .contacts__col {
     display: flex;

     @media (max-width: 600px) {
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

    }

    .contacts__col_text {
        &::before {
          content: url(../assets/images/icons/at-solid.svg);
              left: -40px;
              width: 30px;
              height: 30px;
              top: 0px;
              position: absolute;

              @media (max-width: 600px) {
                 left: 0px;
              }
            }
        &.two {
           &::before {
          content: url(../assets/images/icons/phone-solid.svg);
              left: -40px;
              width: 30px;
              height: 30px;
              top: 0px;
              position: absolute;

              @media (max-width: 600px) {
                 left: 0px;
              }
            }
        }
     }
</style>