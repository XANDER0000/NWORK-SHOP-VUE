<template>
 <div class="intro">
        <div class="blur">
            <div class="container">
                <div class="intro__content">

                    <div class="intro__title">{{ introTitle }}</div>

                    <button v-if="isButtonVisible" class="btn" type="button" id="">
                        Подробнее
                    </button>

                </div><!--intro__content -->
            </div><!--container -->
        </div><!-- blur -->
    </div><!--intro -->
</template>

<script>
export default {
 name: 'MainIntro',

 props: {
     introTitle: {
        type: String,
        default: `Самое лучшее для Вашего здоровья!
         Источник Вашей силы и красоты!`
     }
 },

 data() {
  return {
   isButtonVisible: true,
  }
 },
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

.intro {
    background: url(@/assets/images/intro/mkionc_1556622644350.jpg) left 50% top 50%;
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;
    width: 100%;
    z-index: 20;
    color: rgba(.1);
}

.blur {
    background: rgba(255, 255, 255, 0.192);
    backdrop-filter: blur(3px);
    width: 100%;
}

.intro__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 140px 0;

    @media (max-width: 450px) {
        padding: 60px 0;
    }
}

.intro__title {
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    line-height: 143.6%;
    text-transform: capitalize;
    color: #050920;
    margin-bottom: 30px;
    text-shadow: 0 10px 18px #373737;
    white-space: pre-line;

    @media @tablet{
        font-size: 36.06px;
    }

    @media (max-width: 450px) {
        font-size: 32.06px;
        text-shadow: none;
    }
}
</style>