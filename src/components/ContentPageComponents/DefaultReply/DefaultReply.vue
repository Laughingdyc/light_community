<template>
  <view :class="$style['reply-bg']" @tap="bgClicked" v-if="reply_attr.input_visible"></view>
  <view :class="$style['reply-outer-wrapper']">
    <view :class="$style['reply-inner-wrapper']" @tap="toReply" v-if="!reply_attr.input_visible">
      评论
    </view>
    <view :class="$style['reply-wrapper']" v-if="reply_attr.input_visible">
      <view :class="$style['reply-textarea']">
        <textarea 
          @blur="onBlur" 
          @input="onInput" 
          :focus="reply_attr.reply_focus"
          :value="reply_content" 
          :fixed="true" 
          :show-confirm-bar="false" 
          :cursor-spacing="80"
        />
      </view>
      <view :class="$style['submit-btn']">发送</view>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const reply_attr = computed(() => store.getters.comments___reply_attr)
    const reply_content = ref('')
    const toReply = () => {
      reply_content.value = reply_attr.value.reply_content
      store.dispatch('set_comments___reply_attr', { reply_focus: true, input_visible: true })
    }
    const bgClicked = () => {
      store.dispatch('set_comments___reply_attr', { input_visible: false, reply_content: reply_content.value })
    }
    const onInput = (e) => {
      console.log('onInput', e.detail)
      reply_content.value = e.detail.value
    }
    const onBlur = () => {
      console.log('onBlur', reply_content.value)
      store.dispatch('set_comments___reply_attr', { reply_focus: false, input_visible: false, reply_content: reply_content.value})
    }
    const onFocus = () => {
      console.log('onFocus', reply_content.value)
      // store.dispatch('set_comments___reply_attr', { reply_focus: true, input_visible: false, reply_content: reply_content.value})
    }
    return {
      reply_content,
      reply_attr,
      toReply,
      bgClicked,
      onInput,
      onBlur,
      onFocus
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './DefaultReply.scss'
</style>