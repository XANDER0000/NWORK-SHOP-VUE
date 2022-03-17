<template>
<div class="modal" ref="modal-work__preview">
        <div class="modal__dialog">

            <button type="button" class="modal__close" @click="ClosePopup">
                <img :src="require('@/assets/images/products/close2.svg')" alt="Close">
            </button>

            <div class="modal__inner">
                <slot></slot>
            </div><!-- modal-work -->

        </div><!-- modal__dialog -->
</div><!-- modals -->
</template>

<script>
export default {
 name: 'ProductModal',

  methods: {
        ClosePopup() {
            this.$emit('ClosePopup')
        }
    },

    mounted() {
        let vm = this;
        document.addEventListener('click', function(item) {
            if (item.target === vm.$refs['modal-work__preview']) {
                vm.ClosePopup()
            }
        })
    },

    props: {
        catalog_data: {
            type: Object,
            default() {
                return {}
            }
    },
 },
}


</script>

<style lang="less" scoped>

    @black: #444;
    @blue: #1D46F6;
    @white: #fff;
    @notebook: ~"(max-width: 1200px)";
    @tablet: ~"(max-width: 960px)";
    @mobile: ~"(max-width: 790px)";
    @mobile-sm: ~"(max-width: 560px)";

.modal {
    width: 100%;
    height: 100%;
    padding: 1rem;
    overflow-y: auto;

    background-color: fade(@blue, 10%);

    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal__dialog {
    vertical-align: baseline;
    position: relative;
    max-width: 1100px;
    height: auto;
    background: #fff;
    background-size: cover;
    border-radius: 10px;
    padding: 10px;
    transition: transform .2s linear;
    overflow-y: auto;
}


.modal__close {
    width: 29px;
    height: 29px;
    padding: 0;

    background: none;
    border: 0;
    cursor: pointer;

    position: absolute;

    top: 10px;
    right: 10px;
    z-index: 1000;

    transition: transform .2s linear;

    &:hover {
        transform: rotate(90deg);
    }

    img {
         width: 29px;
         height: 29px;
    }
}


</style>