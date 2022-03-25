<template>
  <view :class="$style['avatar_wrapper_top']">
    <view :class="$style['avatar_wrapper']">
      <image 
        :class="$style['avatar']"
        mode="{{ 'aspectFit' }}" 
        :src="avatar">
      </image>
      <view :class="$style['edit_wrapper']">
        
        <text @tap="click_edit()" :class="[$style['edit'], animate__headShake]">{{ '编辑' }}</text>
        <view :class="$style['identity']" class='at-icon at-icon-sketch animate__animated animate__swing'><text :class="$style['identity']">{{ '校园认证' }}</text></view>
      </view>
    </view>
  </view>
  <view :class="$style['avatar_wrapper_bot']"></view>
  <view :class="$style['userinfo_wrapper']">
    <text :class="$style['username']">{{ '飞翔的豆腐' }}</text>
    <text :class="$style['userid']">{{ '学号：' + '1601110888' }}</text>
  </view>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
const default_avatar_1 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fc3%2Fbb%2F20%2Fc3bb20c1b20a8b4cf3ff7c34fb60fa32.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650302670&t=f7e49563c2ab54ab9e1f3b9db841e6b1'
export default defineComponent ({
  data() {
    return{
      avatar: default_avatar_1,
    }
  },
  setup() {
    const animate__headShake = ref('') // 'animate__animated animate__headShake'
    const click_edit = () => {
      console.log('123')
      animate__headShake.value = 'animate__animated animate__headShake'
      setTimeout(() => {
        animate__headShake.value = ''
      }, 2000);
    }
    return {
      animate__headShake,
      click_edit
    }
  }
})
</script>

<style lang='sass' module>
  @import '../../common/style/common.scss'
  @import './MineArea.scss'
</style>