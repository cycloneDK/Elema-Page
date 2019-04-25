<template lang="html">
  <div class="rating">
      <div class="score">
        <div class="left">
          <h1 class="oscroe">{{seller.score}}</h1>
          <p class="text">综合评分</p>
          <p class="desc">高于周边商家{{seller.rankRate}}%</p>
        </div>
        <div class="right">
          <div class="serviceScore">
            <span class="text">服务评分</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="num">{{seller.serviceScore}}</span>
          </div>
          <div class="serviceScore">
            <span class="text">食物评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="num">{{seller.foodScore}}</span>
          </div>
          <div class="serviceScore"><span class="text">送达时间</span><span class="time">{{seller.deliveryTime}}分钟</span></div>
        </div>
      </div>
      <div class="line"></div>
      <div class="list-wrapper">
        <ratingList :ratings="ratings"></ratingList>
      </div>
      <shopcart  :selectFoods=[]
                 :deliveryPrice="seller.deliveryPrice"
                 :minPrice="seller.minPrice">
      </shopcart>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import star from '../star/star'
import ratingList from '../ratingList/ratinglist'
import shopcart from '../shopcart/shopcart'

const axios = require('axios');
const ERR_OK = 0;

export default {
  props:{
    seller:{}
  },
  data(){
    return{
      ratings:[]
    }
  },
  created(){
    this.getAjax();
  },
  methods:{
    getAjax(){
      axios.get('/api/ratings')
        .then((response)=>{
          response = response.data;
          if (response.errno === ERR_OK) {
            this.ratings = response.data;
            this.$nextTick(()=>{
              // this._initScorll();
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    // _initScorll(){
    //   this.initScorll  = new Bscroll(this.$refs.rating,{
    //     click:true
    //   });
    // }
  },
  components:{
    star,
    ratingList,
    shopcart
  }
}
</script>

<style lang="stylus" scoped>
.rating
  position: absolute
  top: 174px
  bottom: 64px
  width: 100%
  overflow: hidden
  .score
    display: flex
    padding: 18px 0px
    .left
      flex: 0 0 113px
      border-right: 1px solid rgba(7, 17, 27, 0.2)
      .oscroe
        font-size: 24px
        color: rgb(255, 153, 0)
      .text
        font-size: 12px
        margin: 6px 0 8px 0
        color: rgb(7, 17, 27)
      .desc
        font-size: 10px
        margin-bottom: 6px
        color: rgb(147,153,159)
    .right
      flex: 1
      margin-left: 24px
      text-align: left

      .serviceScore
        margin-bottom: 8px
        vertical-align: top
        &:last-Child
          margin-bottom: 0
        .text
          display: inline-block
          font-size: 12px
          vertical-align: middle
          color: rgb(7, 17, 27)
        .star
          display: inline-block
          margin: 0 12px
        .num
          display: inline-block
          font-size: 12px
          color: rgb(255, 153, 0)
        .time
          font-size: 12px
          margin-left: 16px
          color: rgb(147,153,159)
  .line
    height: 18px
    width: 100%
    background: #f3f5f7
    border-bottom: 1px solid rgba(147,153,159, 0.1)
    border-top:  1px solid rgba(147,153,159, 0.1)
  .list-wrapper
    text-align: left




</style>
