<template>
    <div class="p-modal-handle">
        <Button type="default" @click="onClose">取消</Button>
        <Button :type="btnType" @click="onConfirm" :loading="loading">确定</Button>
    </div>
</template>

<script>
    import Button from '../../Button';

    export default {
        name: 'Handle',
        components: { Button },
        props: {
            iconLoading: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                loading: false // 确定按钮的loading属性
            }
        },
        computed: {
            // 确定按钮type属性
            btnType() {
                const thisType=this.type;
                let typeStr='primary';
                if (thisType) {
                    if (thisType === 'info') typeStr='primary';
                    else typeStr='error'
                }
                return typeStr;
            }
        },
        watch: {
            show(n, o) {
                if (n !== o) {
                    if (n) {
                        this.loading=false;
                    }
                }
            }
        },
        methods: {
            onClose() {
                this.$emit('close');
            },
            onConfirm() {
                if (this.loading) return;
                if (this.iconLoading) {
                    this.loading=true;
                }
                this.$emit('confirm');
            }
        }
    }
</script>

<style lang="stylus">

.p-modal-handle
  position absolute
  right 0
  bottom 0
  //background-color #fff
  padding 20px 32px
  //box-shadow 0 -2px 10px 0 rgba(31,35,41,.1)
  width 100%
  text-align right

</style>
