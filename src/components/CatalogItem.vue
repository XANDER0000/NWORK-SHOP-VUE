<template>

<div class="catalog__item" >
				<div class="catalog__item__inner">
					<p class="catalog__item__av">
						<i class="fa fa-check" aria-hidden="true"></i>
						<span>В наличии</span>
					</p>

                    <div class="catalog__wrapper">
                        <div class="catalog__item__image-wrap" @click="ShowPopupInfo">
                            <img :src="require('@/assets/images/products/' + catalog_data.image)" alt="Изображение продукта">
                        </div>
                        <div>
                            <div class="catalog__item__info">
                                <div class="catalog-product__name">
                                    {{  catalog_data.name }}
                                </div>

                                <div class="catalog__item__compare-form" @click="ShowPopupInfo">
                                    ОПИСАНИЕ
                                </div>
                                 <div class="catalog__item__compare-form2">
                                    <span v-html="catalog_data.desctiption"></span>
                                </div>
                                <p class="catalog__item__price">
                                    <span class="catalog__item__cost">{{ catalog_data.price }}</span>
                                    <span class="catalog__item__currency">&#8381;</span>
                                </p>
                            </div>
                            <form class="catalog__item__buy-form">
                                <button type="submit" class="btn">В КОРЗИНУ</button>
                            </form>
                        </div>

                    </div>
                </div>

			</div>
            <product-modal v-if="IsPopupVisible" @ClosePopup="ClosePopup">
                <div class="modal__image">
                    <img :src="require('@/assets/images/products/' + catalog_data.image)" alt="Изображение продукта">
                </div>
                <div class="modal__info">
                    <div class="modal__title">
                        {{ catalog_data.name }}
                    </div>
                    <div class="modal__text">
                        <span v-html="catalog_data.desctiption"></span>
                    </div>
                    <p class="modal__price">
                        <span class="modal__cost">{{ catalog_data.price }}</span>
                        <span class="modal__currency">&#8381;</span>
                    </p>
                    <form class="cart" method="post">

                        <div class="quantity">
                            <a class="quantity__button">-</a><input type="number" id="" class="quantity__input" step="1" min="1" max="" name="quantity" value="1" title="Кол-во" size="4" placeholder="" inputmode="numeric"><a class="quantity__button 2">+</a>
                        </div>

                    <button type="submit" class="btn">В корзину</button>

			</form>
                </div>
            </product-modal>
</template>

<script>

import ProductModal from '@/components/modal/ProductModal.vue';
export default {
 name: 'CatalogItem',
 components: {
     ProductModal
 },

 props: {
  catalog_data: {
   type: Object,
   default() {
    return {}
   }
  },

  isLayout: {
        default: 'grid',
        type: String,
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

<style lang="less">

.cart {
    text-align: left;
}

.quantity {
    margin: 15px 0;
    display: flex;
}

.quantity__button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 36px;
    height: 36px;
    background-color: transparent;
    border: 1px solid #e4e4e4;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 21px;
    color: #444;
    -moz-appearance: textfield;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    border-radius: 0;
    transition: all .2s ease-in-out;

    &:hover {
        border: 1px solid #1D46F6;
        color: #1D46F6;
    }
}

.quantity__input {
    text-align: center;
    background-color: transparent;
    border: 1px solid #e4e4e4;
    max-width: 58px;
    min-height: 36px;
}

.modal__title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 55px 15px 0;

      @media (max-width: 730px) {
       padding: 10px 0 15px 0;
    }
}

.modal__image {
   padding: 0 0 0 0;
    overflow: visible;
    max-width: 35%;
    max-height: 100%;

   img {
        width: 100%;
        height: auto;
        display: block;
        position: inherit;
   }
}

.modal__inner {
    display: flex;
    justify-content: space-between;

    @media (max-width: 730px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
}

.modal__info {
    max-width: 65%;
    padding: 0 10px 0 0;

    @media (max-width: 730px) {
       max-width: 100%;
    }
}

.modal__text {
    text-align: left;
    font-size: 16px;
    line-height: 120%;
    white-space: pre-line;
    max-height: 490px;
    padding: 0 10px 0 0;
    overflow: auto;

    &::-webkit-scrollbar {
        background-color:  rgba(#1D46F6, .3);
        border-radius: 12px;
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #1D46F6;
        width: 4px;
        border-radius: 12px;
        box-shadow: inset 5px 5px 10px #1D46F6;
    }
}

.modal__price {
    text-align: left;
    font-size: 20px;
    color: #57bf6d;
}

.catalog__items{
    margin-right: -10px;
}

.catalog__item__buy-form {

 .btn {
  margin: 0 auto;
  padding: 11px 33px;
  min-height: auto;
  font-size: 17px;
 }
}

.catalog-product__name {
    font-size: 14px;
    padding: 10px 2px 0 0;
    color: #000;
    text-transform: uppercase;
    max-height: 44px;
    overflow: auto;
}
.catalog__items_row{
    display: flex;
    flex-wrap: wrap;

    &.list {
        flex-direction: column;

        .catalog__item {
            width: 100%;
        }

        .catalog__item__image-wrap {
            padding: 0 0 0 0;
            overflow: visible;
            width: 32%;
            max-height: 100%;

            img {
                width: 100%;
                height: auto;
                display: block;
                position: inherit;
            }

            @media (max-width: 1045px) {
                width: 42%;
            }
        }

        .catalog__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 1045px) {
                flex-direction: column;
                justify-content: center;
            }
        }

        .catalog__item__compare-form {
            display: none;
        }

        .catalog__item__compare-form2 {
            display: flex;
            text-align: left;
            max-width: 800px;
            max-height: 150px;
            overflow-y: auto;
            line-height: 140%;
            padding: 10px 10px 0 0;
            white-space: pre-line;

            &::-webkit-scrollbar {
                background-color:  rgba(#1D46F6, .3);
                border-radius: 12px;
                width: 4px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #1D46F6;
                width: 4px;
                border-radius: 12px;
                box-shadow: inset 5px 5px 10px #1D46F6;
            }
        }

        .catalog-product__name {
            font-size: 24px;
        }

        .catalog__item__inner {
            height: auto;
            justify-content: inherit;
        }
    }

}

 .catalog__item__compare-form2 {
            display: none;
        }
.catalog__item{
    list-style: none;
    width: 25%;
    padding: 10px;

    @media (max-width: 955px) {
         width: 33%;
    }

    @media (max-width: 720px) {
         width: 50%;
    }

     @media (max-width: 470px) {
         width: 100%;
    }
}
.catalog__item__inner{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: 1.5px solid #ededed;
    border-radius: 10px;
    height: 500px;
    transition: all .3s;

    @media (max-width: 720px) {
         height: 530px;
    }

     @media (max-width: 470px) {
        height: auto;
    }
}
.catalog__item__inner:hover{
    border-color: #1D46F6;
    -webkit-box-shadow: 0px 7px 30px 1px rgba(#1D46F6, 0.23);
    -moz-box-shadow: 0px 7px 30px 1px rgba(#1D46F6, 0.23);
    box-shadow: 0px 7px 30px 1px rgba(#1D46F6, 0.23);
}
.catalog__item__av{
    text-align: center;
    color: #6db801;
    padding-bottom: 10px;

    span {
     margin: 0 0 0 10px;
    }
}
.catalog__item__image-wrap{
    position: relative;
    cursor: pointer;

    padding: 0 0 90% 0;
    overflow: hidden;

    img {
     width: 100%;
     height: 100%;
     object-fit: cover;
     position: absolute;
     top: 0;
     left: 0;
    }
}
.catalog__item__img-link{
    display: block;
    text-align: center;

}
.catalog__item__discount{
    position: absolute;
    padding: 4px;
    color: #fff;
    border-radius: 9px 0 0 9px;
    background-color: #f5181a;
    right: 27px;
    top: 0;
    font-size: 18px;
}


.catalog__item__info{
    text-align: center;
}
.catalog__item__name{
    font-size: 14px;
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    transition: all .3s;
}

.catalog__item__compare-form{
    padding-top: 20px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}


.catalog__item__price{
    font-size: 22px;
    text-align: center;
}

</style>