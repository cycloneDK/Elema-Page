<template lang="html">
<div class="ratinglist">
  <div class="type">
    <span class="all">全部{{all.length}}</span>
    <span class="nice">推荐{{nice.length}}</span>
    <span class="bad">吐槽{{bad.length}}</span>
  </div>
  <div class="select">
    <span class="icon-check_circle"></span>
    <span class="text">只看有内容的评价</span>
  </div>
  <div class="list" ref="list">
    <ul>
      <li v-for="list in ratings" class="listItem">
        <div class="up">
          <span class="time">{{list.rateTime}}</span>
          <span class="user">{{list.username}}
            <img :src="list.avatar" alt="ss" class="avater" width="12" height="12">
          </span>
        </div>
        <div class="down">
          <span :class="classMap[list.rateType]"></span>
          <span class="desc">{{list.text}}</span>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'

const ALL = "全部"
const POSITIVE = "推荐"
const NEGETIVE = "吐槽"



export default {
  props: {
    ratings: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  created() {
    this.classMap = ['icon-thumb_up', 'icon-thumb_down'];

  },
  mounted(){
    this.$nextTick(()=>{
      this._initScorll();
    })
  },
  computed: {
    all: function() {
      return this.ratings;
    },
    nice: function() {
      return this.ratings.filter((item) => {
        return item.rateType === 0;
      })
    },
    bad: function() {
      return this.ratings.filter((item) => {
        return item.rateType === 1;
      })
    }
  },
  methods: {
    _initScorll(){
      this.initScorll = new Bscroll(this.$refs.list,{
        click:true
      });

    }

  }
}
</script>

<style lang="stylus" scoped>
.ratinglist
  .type
    padding: 18px 0
    font-size: 12px
    .all,.nice,.bad
      display: inline-block
      padding: 8px 12px
      margin-right: 6px
      border-radius: 2px
    .all
      color: rgb(255, 255, 255)
      background-color: rgb(0, 160, 220)
    .nice
      color: rgb(77, 85, 93)
      background-color: rgba(0, 160, 220,0.2)
    .bad
      background-color: rgba(77, 85, 93,0.2)
  .select
    padding: 12px 0
    color: rgb(147, 153, 159)
    line-height: 24px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    .icon-check_circle
      font-size: 24px
      margin-right: 4px
    .text
      display: inline-block
      font-size: 12px
      line-height: 24px
      vertical-align: top
  .list
    height: 200px
    overflow: hidden
    z-index: -10
    .listItem
      padding: 16px 0
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      .up
        font-size: 10px
        color: rgb(147, 153, 159)
        line-height: 12px
        overflow: hidden
        .time
          float: left
        .user
          float: right
          .avatar
            display: inline-block
            border-radius: 50%
      .down
        font-size:12px
        color: rgb(7, 17, 27)
        margin-top: 6px


</style>
