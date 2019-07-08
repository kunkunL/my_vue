<template>
    <div class="container">
        <header>
            <div class="left side">
                <i class="iconfont">&#xe61a;</i>
            </div>
            <div class="content">
                <h1>segment<i>fault</i></h1>
            </div>
            <div class="right side">
                <i class="iconfont">&#xe630;</i>
            </div>
        </header>
        <main>
                <router-view></router-view>            
        </main>
        <nav>
            <ul>
                <router-link tag="li" class="routerLink" active-class="active"  to="/homepage">
                    <i class="iconfont">&#xe656;</i>
                    <b>首页</b>
                </router-link>
            
                <router-link tag="li" class="routerLink" active-class="active" to="/questions">
                    <i class="iconfont">&#xe62b;</i>
                    <b>问答</b>
                </router-link>
            
                <router-link tag="li" class="routerLink" active-class="active" to="/blogs">
                    <i class="iconfont">&#xe652;</i>
                    <b>专栏</b>
                </router-link>
            
                <router-link tag="li" class="routerLink" active-class="active" to="/lives">
                    <i class="iconfont">&#xe629;</i>
                    <b>讲堂</b>
                </router-link>
                <router-link tag="li" class="routerLink" active-class="active" to="/more">
                    <i class="iconfont">&#xe62f;</i>
                    <b>更多</b>
                </router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default {
        data(){
           return {
             
           }
        },
        methods: {
           
        },
    }
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'
.container
  height 100%
  display flex
  flex-direction column
  header 
    height .44rem
    display flex
    flex-direction row
    border_1px(6px 0 0 0,#009A61)
    background #fafafa
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1)
    .side
        width .70rem
        text-align center
        line-height .44rem
        .iconfont
            font-size .25rem
    .content
        flex 1
        font-size .24rem
        text-align center
        line-height .44rem
        i 
            color #009A61        
  main 
    flex 1
    background #fff
    padding 0.3rem 0.15rem 0 
    overflow hidden
  nav 
    height .5rem
    border_1px(1px 0 0 0)
    background-color: #fafafa
    box-shadow: 0 -1px rgba(0,0,0,0.1), 0 -2px 10px rgba(0,0,0,0.1)
    ul
      height 100%
      display flex
      flex-direction row
      li
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        color #797d82
        &.active
          color #009a61
        .iconfont 
          font-size .21rem
        b
          font-size .10rem
          font-weight  normal
                  
</style>