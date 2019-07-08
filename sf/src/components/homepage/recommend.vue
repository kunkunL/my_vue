<template>
    <div class="recommend">
        <div class="my_recommend">
            为你推荐
        </div>
        <div class="recommendList">
            <HomeList :bb="bb" :data1="data1"></HomeList>
        </div>
    </div>
</template>
<script>
import HomeList from '../HomeList'
export default {
    props:['aa',"data1"],
    data(){
       return{
           bb:this.aa
       }
    },
   components:{
       HomeList
   },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'
.recommend
    display flex
    flex-direction column
    // position absolute
    .my_recommend
        height .45rem
        padding-top .15rem
        font-size 16px
        border_1px(0 0 1px 0)
    .recommendList 
        flex 1 
</style>