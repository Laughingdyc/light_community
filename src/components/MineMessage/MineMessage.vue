<template>
  <view v-for="(data, index) in listData" :key="data.id">
    <view :class="$style['wrapper']">
      <view :class="$style['avatar_wrapper']">
        <AtAvatar :class="$style['avatar']" size='small' :circle='true' :image='data.avatar'></AtAvatar>
      </view>
      <view :class="$style['content_wrapper']">
        <view :class="$style['name_and_time']">
          <text :class="$style['name']">{{ data.name }}</text>
          <text :class="$style['time']">{{ data.time }}</text>
        </view>
        <view :class="$style['comment_and_label']">
          <text :class="$style['comment']">{{ data.comment }}</text>
          <text v-if="!data.isRead" :class="$style['label']" class='at-icon at-icon-bell'></text>
        </view>
      </view>
    </view>
    <AtDivider v-if="listData && (index < listData.length - 1)" content='' height='30' lineColor='#EEF0F0' />
  </view>
</template>

<script lang="ts">
  const default_avatar_1 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fc3%2Fbb%2F20%2Fc3bb20c1b20a8b4cf3ff7c34fb60fa32.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650302670&t=f7e49563c2ab54ab9e1f3b9db841e6b1'
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    props: {
      listData: {
        require: true,
        type: Array,
        default: []
      }
    },
    setup() {
      const avatar = ref(default_avatar_1)
      return {
        avatar
      }
    }
  })
</script>

<style lang="sass" module>
  @import '../../common/style/common.scss'
  @import './MIneMessage.scss'
</style>