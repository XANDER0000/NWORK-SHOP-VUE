<template>
 <TopBar/>
 <MainHeader/>
 <MainIntro/>
 <main-advantages/>
 <main-popular/>
 <main-about/>
 <main-documents/>
 <main-reviews/>
 <main-footer/>
 <router-view></router-view>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import MainHeader from '@/components/Header.vue'
import MainIntro from '@/components/MainIntro.vue'
import MainAdvantages from '@/components/MainAdvantages.vue'
import MainPopular from '@/components/MainPopular.vue'
import MainAbout from '@/components/MainAbout.vue'
import MainDocuments from '@/components/MainDocuments.vue'
import MainReviews from '@/components/MainReviews.vue'
import MainFooter from '@/components/MainFooter.vue'


export default {
  name: 'HomePage',
  components: {
    TopBar, MainHeader,
    MainIntro,
    MainAdvantages,
    MainPopular,
    MainAbout, MainDocuments, MainReviews, MainFooter,
  }
}
</script>

<style lang="less">
    @black: #444;
    @blue: #1D46F6;
    @white: #fff;

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
}


body {
    margin: 0;
    position: relative;
    height: 100%;

    font-family: 'Work Sans', sans-serif;

    font-size: 14px;
    color: @black;
    -webkit-font-smoothing: antialiased;

    &.no-scroll {
        overflow: hidden;
    }
}

ul {
    padding: 0;
}

.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
}

h1, h2, h3, h4, h4, h5 {
    margin: 0;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

    @black: #444;
    @blue: #1D46F6;
    @white: #fff;
    @notebook: ~"(max-width: 1200px)";
    @tablet: ~"(max-width: 960px)";
    @mobile: ~"(max-width: 790px)";
    @mobile-sm: ~"(max-width: 560px)";

.btn {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;

    padding: 13px 33px;
    min-width: 150px;
    min-height: 50px;

    font-size: 20px;
    line-height: 123.6%;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    z-index: 10;
    color: #fff;
    text-decoration: none;
    background: none;
    border: 0;
    border-radius: 30px;
    cursor: pointer;

    background-color: #1D46F6;


    transition: all .2s ease-out, transform .1s ease-in;

    &:focus {
        outline: none;
    }

    &:hover {
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
        filter: drop-shadow(6px 5px 15px rgba(#1D46F6, 0.4));

        transform: scale (1.03);
    }

    &:active {
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
        filter: drop-shadow(4px 5px 15px rgba(#1D46F6, 0.4));

        transform: scale(.94);
    }
}

.section__heading {
    position: relative;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    max-width: 600px;
    margin: 0 auto;

    &::after {
        position: absolute;
        content: "";
        width: 40px;
        height: 2px;
        bottom: -30px;
        left: 46%;
        background-color: #444;
    }
}
</style>
