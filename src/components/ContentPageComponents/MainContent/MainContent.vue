<template>
  <view :class="$style['content-outer-wrapper']">
    <view :class="$style['content-inner-wrapper']">
      <view>
        <view :class="$style['content-authore-wrapper']">
          <AtAvatar v-if="avatar" :class="$style['content-avatar']" size='small' :circle='true' :image='avatar'></AtAvatar>
          <view :class="$style['content-author-wrapper']">
            <text :class="$style['content-author-name']">{{ '飞翔的豆腐' }}</text>
            <text :class="$style['content-post-info']">{{ '04-28 00:35:20' }}</text>
          </view>
        </view>
        <view :class="$style['content-header']">
          {{ '<小王子>' }}
        </view>
        <view :class="$style['content']">
          {{ `当你真的喜欢一个人的时候，就会想很多，会很容易办蠢事，说傻话。在这颗蓝色的星球上，我本有着阻挡一切困难的勇气，但在喜欢你这件事上，我脆弱地像一个孤单的小鬼。` }}
        </view>
      </view>
      <!-- <view :class="$style['post-time']">
        {{ '2022-04-28 00:35:20' }}
      </view> -->
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const avatar = ref('')
    const bg_style = ref({})
    const img_style = ref({})
    onMounted(() => {
      avatar.value = `http://175.27.165.106/static/123.jpg`
    })

    return {
      bg_style,
      img_style,
      avatar
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './MainContent.scss'
</style>