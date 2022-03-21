<template>
  <view :class="$style['avatar_wrapper_top']">
    <view :class="$style['avatar_wrapper']">
      <image 
        :class="$style['avatar']"
        mode="{{ 'aspectFit' }}" 
        :src="avatar">
      </image>
    </view>
  </view>
  <view :class="$style['avatar_wrapper_bot']"></view>
</template>

<script>
const default_avatar_1 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fc3%2Fbb%2F20%2Fc3bb20c1b20a8b4cf3ff7c34fb60fa32.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650302670&t=f7e49563c2ab54ab9e1f3b9db841e6b1'
export default {
  data() {
    return{
      avatar: default_avatar_1
    }
  },
}
</script>

<style lang='sass' module>
  @import './Mine.scss'
</style>