<template>
    <transition name="slideRightLeft">
        <div
                ref="drawerBox"
                v-if="show"
                class="p-drawer"
                :tabindex="-1"
                @blur="drawerBlur"
                @mouseenter="drawerEnter"
                @mouseleave="drawerLeave"
        >
            <div class="p-drawer-title" v-show="title">
                <section class="p-title-text">{{title}}</section>
                <Icon type="close" class="p-drawer-title-icon" @click="onClose" />
            </div>
            <div :class="['p-drawer-content', bottom&&'p-drawer-content-bottom']" @scroll="contentScroll">
                <!-- @slot html内容 -->
                <slot></slot>
                <section class="p-drawer-content-loading" v-if="loadingMore">
                    <LoadingGrey />
                    <span>加载中...</span>
                </section>
            </div>
            <!--<div :class="['p-drawer-handle', bottom&&'p-drawer-handle-bottom']" v-if="btnShow">-->
            <div :class="['p-drawer-handle', bottom&&'p-drawer-handle-bottom']" v-if="bottom">
                <Button type="primary" @click="onConfirm" :loading="loading">确定</Button>
                <Button type="default" @click="onClose">取消</Button>
            </div>
        </div>
    </transition>
</template>

<script>
    import Icon from '../Icon';
    import Button from '../Button';
    import LoadingGrey from '../static/iconSvg/loading_grey.svg';

    export default {
        name: 'Drawer',
        components: { Icon, Button, LoadingGrey },
        props: {
            /**
             * 侧拉窗显示状态
             */
            show: {
                type: Boolean,
                default: false,
                require: true
            },
            /**
             * 是否聚焦（也就是失去交掉是否关闭侧拉窗）
             */
            focus: {
                type: Boolean,
                default: false
            },
            /**
             * 侧拉窗标题
             */
            title: {
                type: String,
                default: '',
                require: true
            },
            /**
             * 点击确定按钮 是否加载确定按钮loading动画
             */
            loading: {
                type: Boolean,
                default: false
            },
            /**
             * 是否固定底部操作栏
             */
            bottom: {
                type: Boolean,
                default: false
            },
            // 加载更多
            loadingMore: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                autoClose: false, // 是否拾取焦点就关闭
                scrollTop: 0 // 滚动条的位置
            }
        },
        watch: {
            // 监听focus改变
            focus(n) {
                this.autoClose=n;
            },
            // 监听抽屉显示
            show(n) {
                if (n) {
                    this.$nextTick(() => {
                        this.$refs.drawerBox.focus();
                    })
                }
            },
            // 监听滚动的距离
            scrollTop(n, o) {
                if (n === o && n>0) {
                    console.log(n)
                }
            }
        },
        created() {
            this.autoClose=this.focus;
        },
        methods: {
            // 鼠标移入
            drawerEnter() {
                if (this.focus) this.autoClose=false;
            },
            // 鼠标移出
            drawerLeave(e) {
                if (this.focus) {
                    this.autoClose=true;
                    e.target.focus();
                }
            },
            // 失去焦点
            drawerBlur() {
                if (this.focus && this.autoClose) this.onClose();
            },
            /**
             * 关闭侧拉窗
             */
            onClose() {
                if (this.loading) this.$emit('changeLoading', false);
                this.$emit('changeStatus', false);
            },
            // 监听页面触底
            contentScroll(e) {
                if (this.loadingMore) return;
                this.$nextTick(() => {
                    const target=e.target;
                    const {scrollTop, scrollHeight}=target;
                    const h=target.getBoundingClientRect().height;
                    if (scrollTop+h === scrollHeight) {
                        // 触底了
                        this.$emit('getMore')
                    }
                })
            },
            /**
             * 点击确定按钮执行的回调
             */
            onConfirm() {
                if (this.loading) return;
                this.$emit('changeLoading', true);
                this.$emit('confirm');
            }
        }
    }
</script>

<style lang="stylus">
    @import "../static/stylus/animate/slideRightLeft.styl"

    .p-drawer
        outline none
        position fixed
        right 0
        top 48px
        background-color #fff
        box-shadow 0 2px 10px 0 rgba(31,35,41,.1)
        min-width 304px
        max-width 680px
        height calc(100% - 48px)
        z-index 899
    .p-drawer-title
        position relative
        padding-left 32px
        padding-right 32px
        border-bottom 1px solid $grey-300
        width 100%
        height 56px
        line-height @height
        .p-title-text
            max-width 98%
            color $grey-900
            font-size 16px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
        .p-drawer-title-icon
            position absolute
            top 16px
            right 28px
            //overflow-y auto
    .p-drawer-content
        padding 12px 32px
        width 100%
        height calc(100% - 56px)
        overflow auto
        .p-drawer-content-loading
            padding 16px
            width 100%
            text-align center
            svg, span
                vertical-align middle
            span
                color $grey-600
                font-size 14px
    .p-drawer-content-bottom
        height calc(100% - 128px)
    .p-drawer-handle
        padding 20px 32px
        background-color #fff
        width 100%
    .p-drawer-handle-bottom
        position absolute
        right 0
        bottom 0
        box-shadow 0 -2px 10px 0 rgba(31,35,41,.1)

</style>
