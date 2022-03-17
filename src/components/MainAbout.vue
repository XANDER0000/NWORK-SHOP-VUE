<template>
<div class="about" id="About">
        <div class="container">
            <div class="about__wrapper">

                <div class="about__content">
                    <div class="about__title">О нас</div>
                    <div class="about__text">Инновационная продукция Nwork, изготовлена из высшего сорта черного тмина Nigela Sativa. А их существует около 400 сортов. Богата более 100 полезными ингредиентами. Черный тмин Nwork извлекается методом холодного прессования, сохраняя устойчивое содержание эфирного масла (основное действующее вещество ТИМОХИНОН до 40-70%). Это отличает наш тмин от продукции в магазинах, поскольку это вещество не стойкое и на свету теряет свои свойства.<br>
                    Компании Нворк удалось в течении многолетней работы с помощью новейших методов нанотехнологий сохранить Тимохинон и сделать его устойчивым. Продукция Nwork запатентована, имеет свой товарный знак (R), все сертификаты качества европейского стандарта. Соответствует стандарту Халал.<br>
                    Особой отличительностью является масло черного тмина в капсулах, которая очищена от ненужной жирности, не имеет горечи и терпкости. Масло черного тмина в капсулах с удовольствием рассасывают даже дети.</div>

                    <div class="popular__btn">
                        <button class="btn" type="button" id="" @click="$router.push('/about/#Header')">
                            Подробнее
                        </button>
                    </div>
                </div>

                <div class="about__img">
                    <img src="@/assets/images/about/i.png" alt="">
                </div>

            </div><!--about__wrapper -->
        </div><!--container -->
    </div><!--about -->
</template>

<script>
export default {
 name: 'MainAbout'
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

.about {
    padding: 60px 0;
}

.about__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
        padding: 0 60px;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 620px) {
        padding: 0;
    }
}

.about__content {
    @media (max-width: 1000px) {
        margin: 0 0 40px 0;
    }

    @media (max-width: 540px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.about__title {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 30px 0;
    line-height: 1.5;
    color: @black;
}

.about__text {
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 30px 0;
    line-height: 150%;
    padding-right: 70px;
    color: rgb(90, 86, 86);

    @media (max-width: 1000px) {
        padding-right: 0;
    }
}

.about__img {
    img {
        height: 528px;
        width: auto;

        @media (max-width: 1030px) {
            height: auto;
            width: 100%;
        }
    }
}
</style>