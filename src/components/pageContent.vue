<template>
    <div class="page_content">
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view/>
            </keep-alive>
            <router-view v-else/>
    </div>
</template>

<script>
    export default {
        name: "pageMain",
        data(){
            return{

            }
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>