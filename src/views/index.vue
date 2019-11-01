<template>
    <el-container>
        <el-aside :width="isCollapse?'64px':'200px'">
            <x-layout-menu/>
        </el-aside>
        <el-container>
            <el-header>
                <x-layout-topbar/>
            </el-header>
            <el-main>
                <x-layout-tags/>
                <x-layout-main/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import XLayoutMenu from './../components/component/layout/xlayout-menu';
    import XLayoutTopbar from './../components/component/layout/xlayout-topbar'
    import XLayoutTags from './../components/component/layout/xlayout-tags'
    import XLayoutMain from './../components/component/layout/xlayout-main';

    export default {
        name: "layout",
        components: {
            XLayoutMenu,
            XLayoutTopbar,
            XLayoutTags,
            XLayoutMain
        },
        computed: {
            isCollapse() {
                return this.$store.state.controlStyle.isCollapse
            }
        }
    }
</script>
<style lang="less" scoped>
    .el-container {
        width: 100%;
        height: 100%;
    }
    .el-header {
        padding: 0;
        font-size: 0;
        line-height: 60px;
        background: white;
        box-sizing: border-box;
        overflow: hidden;
    }
    .el-aside {
        border:1px solid #324057;
        background:#324057;
        color: #fff;
        overflow: hidden;
        position: relative;
    }
    .el-main {
        padding: 0;
        height: 100%;
        overflow: auto
    }
</style>
