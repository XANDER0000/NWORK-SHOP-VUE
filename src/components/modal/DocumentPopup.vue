<template>
<div class="modal" ref="modal-work__preview">
        <div class="modal__dialog">

            <button type="button" class="modal__close" @click="ClosePopup">
                <img :src="require('@/assets/images/documents/close.png')" alt="Close">
            </button>

            <div class="modal-work">
                <div class="modal-work__preview" >
                     <slot></slot >
                </div>
            </div><!-- modal-work -->

        </div><!-- modal__dialog -->
    </div><!-- modals -->
</template>

<script>
export default {
 name: 'DocumentPopup',

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
    document_data: {
        type: Object,
            default() {
                return {}
        }
    }
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

    background-color: fade(@black, 80%);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.modal__dialog {
    max-width: 707px;
    margin: 0 auto;
    transition: transform .2s linear;
}

.modal-work {
    display: flex;
    justify-content: center;
}

.works__image {
    position: relative;
    width: 100%;
    height: auto;
}

.modal__close {
    width: 39px;
    height: 39px;
    padding: 0;

    background: none;
    border: 0;
    cursor: pointer;

    position: absolute;

    top: 60px;
    right: 80px;
    z-index: 1000;

    transition: transform .2s linear;

    &:hover {
        transform: rotate(90deg);
    }

    img {
         width: 39px;
         height: 39px;
    }

    @media (max-width: 980px) {
        right: 5%;
        top: 10px;
    }
    @media (max-width: 400px) {
        top: -40px;
     }
}


</style>