<template>
  <div class="wrapper">
    <div class="homepage">
      <div class="classification">
        <router-link tag="div" active-class="active" to="/homepage/recommend">
          <i class="iconfont">&#xe636;</i>
          <b>为你推荐</b>
        </router-link>
        <router-link tag="div" active-class="active" to="/homepage/hosting">
          <i class="iconfont">&#xe6ea;</i>
          <b>近期热门</b>
        </router-link>
        <router-link tag="div" active-class="active" to="/homepage/news">
          <i class="iconfont">&#xe635;</i>
          <b>最新内容</b>
        </router-link>
        <router-link tag="div" active-class="active" to="/homepage/technology">
          <i class="iconfont">&#xe632;</i>
          <b>技术频道</b>
        </router-link>
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://image-static.segmentfault.com/536/197/536197400-5c85cd29add00" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://image-static.segmentfault.com/642/650/642650982-5c86366425d04" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://image-static.segmentfault.com/299/387/2993876284-5cceb4963c3e1" alt />
          </div>
          <div class="swiper-slide">
            <img src="https://image-static.segmentfault.com/131/301/1313011719-5bc6a63ef190f" alt />
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
      <div class="container">
        <transition
         :name="transitionName"
        >
          <router-view :aa="aa" :data1="data1"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { Indicator } from 'mint-ui';
import '../mixin/data_scroll'
import 'animate.css'
export default {
  data(){
    return{
      aa : this.data_scroll(this).then((res)=>{
               Indicator.close();
              //  console.log(res)
               return res
           }),
      data1 : '',
      transitionName : 'slide-left'
    }
  },
  watch:{
     data1(){
       console.log(this.data1)
     },
     $route(to,from){
        this.transitionName = to.meta > from.meta ? 'slide-left' : 'slide-right' 
     }
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
    // this.$nextTick(() => {
        
    //     let node = document.querySelector('.homelist')
    //     // console.log(node)
    //     this.scroll = new BScroll(".wrapper", {
    //       pullUpLoad: true,
    //       click: true
    //     })
    //     this.scroll.on("pullingUp",function(){
            
    //     })
    // });
    // this.data_scroll()
  },
};
</script>
<style lang="stylus">
@import '../../node_modules/swiper/dist/css/swiper.css';
.wrapper
    height 100%
.homepage {
  display: flex;
  flex-direction: column;

  .classification {
    height: 0.35rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.3rem;

    >div {
      height: 100%;
      flex: 1;
      text-align: center;
      line-height: 0.35rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &.active {
        background: #009A61;
        border-radius: 0.05rem;

        i, b {
          color: #fff;
          font-weight: 900;
        }
      }

      b {
        font-weight: normal;
        color: #757575;
        font-size: 0.13rem;
      }
    }
  }

  .swiper-container {
    width: 100%;
    border-radius: 0.05rem;
    overflow: hidden;

    img {
      width: 100%;
      min-height: 1.5rem;
    }
  }

  .container {
    flex: 1;
  }
    
    // position relative
             
    
}   
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active
        transition all 1s 
    .slide-left-enter,
    .slide-right-leave
        transform translate3d(100%,0,0)
   
    .slide-left-leave,
    .slide-right-enter
        transform translate3d(-100%,0,0)   
</style>
