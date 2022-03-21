
<template>
  <view class="wrapper" :class="{ 'left_wrapper': isOdd }">
    <view class="uers_info_wrapper">
      <AtAvatar size='small' circle='true' :image='preData && preData.avatar'></AtAvatar>
      <text class="name">{{ preData && preData.name }}</text>
    </view>
    <view class='at-article'>
      <view class='at-article__p content_info'>
        {{ preData && preData.content }}
      </view>
    </view>
    <view class='at-article__info time_info'>
      {{ preData && preData.time }}
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from 'vue'

export interface IPreData {
  avatar: string,
  name: string,
  content: string,
  time: string
}

export default defineComponent({
  props: {
    preData: {
      require: true,
      type: Object as PropType<IPreData>
    },
    isOdd: {
      require: true,
      type: Boolean
    }
  },
  setup(props) {
    onMounted(() => {
      console.log(props.isOdd)
    })
  }
})
</script>

<style lang="sass" scoped>
  @import '../../common/style/common.scss'
  @import './PreviewPost.scss'
</style>