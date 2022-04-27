<template>
  <view :class="$style['top-bg-wrapper']">
    <image :class="$style['top-bg-img']" src="http://175.27.165.106/static/123.jpg" mode="widthFix"></image>
  </view>

  <view :class="$style['content-outer-wrapper']">
    <view :class="$style['content-inner-wrapper']">
      <view>
        <view :class="$style['content-authore-wrapper']">
          <AtAvatar :class="$style['content-avatar']" size='small' :circle='true' image='http://175.27.165.106/static/123.jpg'></AtAvatar>
          <view :class="$style['content-author-wrapper']">
            <text :class="$style['content-author-name']">{{ '飞翔的豆腐' }}</text>
            <text :class="$style['content-post-info']">{{ '14评论 222阅读' }}</text>
          </view>
        </view>
        <view :class="$style['content-header']">
          {{ '<小王子>' }}
        </view>
        <view :class="$style['content']">
          {{ `当你真的喜欢一个人的时候，就会想很多，会很容易办蠢事，说傻话。在这颗蓝色的星球上，我本有着阻挡一切困难的勇气，但在喜欢你这件事上，我脆弱地像一个孤单的小鬼。` }}
        </view>
      </view>
      <view :class="$style['post-time']">
        {{ '2022-04-28 00:35:20' }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './MainContent.scss'
</style>