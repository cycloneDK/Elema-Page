<template lang="html">
  <div class="cartControl">
    <transition name="move">
      <span class="decrease icon-remove_circle_outline" v-show="food.count>0"
      @click="decreaseCount($event)"></span>
    </transition>
    <span class="num" v-show="food.count>0">{{this.food.count}}</span>
    <span class="add icon-add_circle" @click="addCount($event);ballPosition($event)"></span>
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
    },
    decreaseCount(event){
      if(!event._constructed){
        return;
      }else if(this.food.count>0){
        this.food.count--;
      }
    },
    ballPosition(event){
      if(!event._constructed){
        return;
      }
      this.$emit("ballPosition",{"left":event.clientX+'px',"top":event.clientY+'px'});
    }
  }
}
</script>

<style lang="stylus" scoped>
.cartControl
  font-size: 24px
  line-height: 24px
  .move-enter-active, .move-leave-active
    transition: all 0.8s linear
  .move-enter, .move-leave-to
    opacity: 0
    transform: translate3D(42px,0,0)
    transform: rotate3d(0,0,1,120deg)
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
