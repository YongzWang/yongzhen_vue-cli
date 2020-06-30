<template>
    <div id="pag">
        <el-row >
            <page-header/>
        </el-row>
        <el-row>
         <el-col :span="4">
             <slide-nav/>
         </el-col>
            <el-col :span="20">
                <page-main/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import SlideNav from "./slideNav";
    import PageHeader from "./pageHeader";
    import PageMain from "./pageContent";
    export default {
        name: "pageBody",
        components: {PageMain, PageHeader, SlideNav}
    }
</script>

<style scoped>

</style>