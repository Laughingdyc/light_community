<template>
  <view :class="$style['tab-wrapper']">
    <view :class="$style['tab']">{{ '全部评论' }}</view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() { },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './DefaultTab.scss'
</style>