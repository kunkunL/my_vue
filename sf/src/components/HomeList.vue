<template>
  <div class="homelist">
    <div class="listItem" v-for="data in datalist" :key="data.id" @click="todetail(data.id)">
      <div class="left">
        <h4>{{data.nm}}</h4>
        <p>{{data.star}}{{data.showInfo}}</p>
        <div class="last">
             <span class="fabulous">
                 <span class="circular">
                     <i class="iconfont">&#xe64f;</i>
                 </span> 
                 <span class="ride">
                      <i class="iconfont my_ride">&#xe647;</i>
                      <span>5</span>   
                 </span>
                 <span class="dot ">·</span>
                 <span class="votes-word">赞</span>
             </span>
             <span class="date">
                 <span class="author">公子</span>
                 <span class="dot ">·</span>
                 <span>{{data.rt}}</span>
             </span>
        </div> 
      </div>
      <div class="right">
        <img :src="data.img | replace('192.270')" width="64" height="90"  alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['bb','data1'],
  data(){
    return{
       datalist : []
    }
  },
  mounted(){
     this.bb.then((res)=>{
        this.datalist = res
     });
  },
  watch:{
    data1(){
      console.log(this.data1)
      this.datalist = this.data1
    }
  },
  methods:{
    todetail(id){
       this.$router.push({
         name:'detail',
         params:{
           id
         }
       })
    }
  }
}
</script>
<style lang="stylus">
@import '~@/assets/styles/ellipsis.styl';

.homelist {
  padding-top: 0.15rem;
  width: 100%;

  .listItem {
    padding-bottom: 0.15rem;
    display: flex;
    flex-direction: row;

    .left {
      width: 75%;

      h4 {
        font-size: 0.18rem;
        font-weight: 500;
        color: #212121;
        ellipsis(100%, 2);
      }

      p {
        margin-bottom: .15rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.5;
        color: #888;
        font-size: .13rem;
      }
      .last{
        width 100%
        height .25rem
        font-size .13rem 
        .fabulous{
            padding-right .2rem
            .circular{
                background-color: rgba(1,126,102,0.08);
                color: #009a61;
                padding: 0;
                display: inline-block;
                height: .24rem;
                width: .24rem;
                line-height: .24rem;
                text-align: center;
                margin-right: 0.05rem;
                border-radius: .12rem;
                margin-bottom: 1px;
                }
            }  
            .ride{
                color: #009a61;
                font-weight: bold;
                font-size .13rem
                }
            .dot{
                padding 0 0.05rem
                }    
        }
    }

    .right {
     flex 1
     >img {
         display inline-block
         width .8rem
         height .6rem
         border-radius 0.05rem
     }
    }
  }
}
</style>
