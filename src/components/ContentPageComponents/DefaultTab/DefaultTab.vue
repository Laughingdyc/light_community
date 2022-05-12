<template>
  <view :class="$style['tab-wrapper']">
    <view :class="$style['tab']">{{ '全部评论' }}</view>
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
  @import './DefaultTab.scss'
</style>