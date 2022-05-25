<template>
  <view :class="$style['reply-outer-wrapper']">
    <view :class="$style['reply-inner-wrapper']">
      <AtSearchBar
        placeholder='请发表一段友善的评论吧（140字以内）'
        actionName='发表'
        v-model:value="reply_content"
        @action-click="onActionClick"
        v-model:focus="reply_focus"
      />
    </view>
  </view>
</template>

<script lang="ts">
import {  defineComponent, ref } from 'vue'

export default defineComponent({
  props: ["reply_focus"],
  setup() {
    const reply_content = ref('')
    const onActionClick = () => {
      console.log('onActionClick', reply_content.value)
    }
    return {
      reply_content,
      onActionClick
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './DefaultReply.scss'
</style>