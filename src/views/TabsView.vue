<template>
    <div class="toggleView">
        <div class="component component-padding">
            <h1>Tabs组件</h1>
            <!--
             data:数据
             v-model绑定的id
             change：点击事件
             -->
            <Tabs :data="tabData" v-model="tabId" @change="tabChange" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabsView",
        data() {
            return {
                tabId: '1'
            }
        },
        computed: {
            tabData() {
                return [
                    { id: '1', name: '第1模块' },
                    { id: '2', name: '第2模块' },
                    { id: '3', name: '第3模块' },
                    { id: '4', name: '第4模块' },
                    { id: '5', name: '第5模块' },
                ]
            }
        },
        methods: {
            tabChange(id) {
                console.log('********tabChange:::', id);
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .textCar
        width 240px

</style>
