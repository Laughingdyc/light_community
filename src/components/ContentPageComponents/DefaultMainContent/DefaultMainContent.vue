<template>
  <view :class="$style['content-outer-wrapper']">
    <view :class="$style['content-header']">
      {{ '躺平了能睡着' }}
    </view>
    <view :class="$style['content-inner-wrapper']">
      <view>
        <view :class="$style['content-authore-wrapper']">
          <AtAvatar v-if="avatar" :class="$style['content-avatar']" size='small' :circle='true' :image='avatar'></AtAvatar>
          <view :class="$style['content-author-wrapper']">
            <text :class="$style['content-author-name']">{{ '飞翔的豆腐' }}</text>
            <text :class="$style['content-post-info']">{{ '04-28 00:35:20' }}</text>
          </view>
        </view>
        <view :class="$style['content']">
          {{ `晚上睡不着觉，我妈告诉我，躺平了才能睡着，卷着是睡不着的` }}
        </view>
      </view>
    </view>
    <view :class="$style['icons']">
      <text>
        <text class="icon-thumbs-up" :class="[$style['icon-thumbs-up'], $style['icon']]"></text>
        <text :class="$style['icons-desc']">{{ '2' }}</text>
      </text>
      <text>
        <text class="icon-thumbs-down" :class="[$style['icon-thumbs-down'], $style['icon']]"></text>
        <text :class="$style['icons-desc']">{{ '踩' }}</text>
      </text>
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
      avatar.value = `http://175.27.165.106/static/2.png`
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
  @import './DefaultMainContent.scss'
</style>