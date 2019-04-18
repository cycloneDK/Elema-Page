<template lang="html">
  <div class="cartControl">
    <transition name="move">
      <span class="decrease icon-remove_circle_outline" v-show="food.count>0"
      @click="decreaseCount($event)"></span>
    </transition>
    <span class="num" v-show="food.count>0">{{this.food.count}}</span>
    <span class="add icon-add_circle" @click="addCount($event)"></span>
  </div>
</template>

<script>
import Vue from 'Vue'

export default {
  props:{
    food:{
      type:Object
    }
  },
  methods:{
    addCount(event){
      if(!event._constructed){
        return
      }

      if(!this.food.count){
        this.$set(this.food,'count',1);
      }else{
        this.food.count++;
      }
      console.log(this.food.count);
    },
    decreaseCount(event){
      if(!event._constructed){
        return;
      }else if(this.food.count>0){
        this.food.count--;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.cartControl
  font-size: 24px
  line-height: 24px
  .move-enter-active, .move-leave-active
    transition: transform 0.8s
  .move-enter, .move-leave-to
    opacity: 0
    transform: translate3D(24px,0,0)
  .decrease, .add
    display: inline-block
    color: rgb(0, 160, 220)
    padding: 6px
  .num
    display: inline-block
    width: 12px
    font-size: 10px
    padding: 6px 0
    color: rgb(147, 153, 159)
    vertical-align: top



</style>
