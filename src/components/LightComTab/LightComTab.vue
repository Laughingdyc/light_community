<template>
  <!-- tab -->
  <scroll-view v-if="tabList.length" :class="$style['LC_tab__header_wrapper']" :scroll-x="tabList.length > 5">
    <view 
      v-for="(header, index) in tabList" 
      :key="index"
      :class="{ [$style.LC_tab__header_active]: current === index, [$style['LC_tab__header']]: true }" 
      :style="{ 'width': tWidth }"
      :animation="animationData[index]"
      @tap="clickTab(index)"
    >
      {{ header }}
    </view>
  </scroll-view>
  <!-- content -->
  <swiper v-if="tabList.length" :style="{ 'height': height }" @change="bindchange" :current="current">
    <block v-for="(item, index) in tabList" :key="item">
      <swiper-item>
        <scroll-view :enable-back-to-top="true" :scroll-y="true" :class="$style['LC_tab__scroll_view']">
          <slot :name="`tab_${index}`"></slot>
        </scroll-view>
      </swiper-item>
    </block>
  </swiper>
</template>

<script lang="ts">
  import { themeColor } from '../../common/ts/common.color'
  import { ref, defineComponent, PropType, onMounted } from "vue"
  import Taro from '@tarojs/taro'

  export default defineComponent ({
    emits: ['handleClick'],
    props: {
      tabList: {
        require: true,
        type: Array as PropType<string[]>,
        default: []
      },
      tabWidth: {
        require: false,
        type: Number,
        default: 0
      },
      current: {
        require: false,
        type: Number,
        default: 0
      },
      height: {
        require: false,
        type: String,
        default: 'calc(100vh - 80rpx)'
      }
    },
    setup (props, { emit }) {
      onMounted(() => {
        change_bg_color(props.current, themeColor.light_blue_bg)
      })
      /**
       * 点击tab栏后的回调
       * @param currentTab 被点击的tab
       */
      const clickTab = (currentTab) => {
        tab_animation(currentTab)
      }
      /**
       * 切换背景
       * @param targetTab 指定切换背景的tab
       * @param color 指定切换的颜色
       */
      const change_bg_color = (targetTab, color) => {
        const animation = Taro.createAnimation({
          duration: 400,
          timingFunction: 'ease-in-out',
        })
        animation.backgroundColor(color).step()
        animationData.value[targetTab] = animation.export()
      }
      /**
       * 每个tab宽度
       * 优先级 tabWidth > tabList.length
       */
      const tWidth = ref(
        props['tabWidth'] > 0 && props['tabWidth'] < 750
          ? `${ props['tabList'] }px` 
          : props['tabList'].length < 6
              ? `${ 100 / props['tabList'].length }%`
              : `20%`
      )
      /**
       * 切换tab并触发切换动画
       */
      const tab_animation = (targetTab) => {
        change_bg_color(props.current, themeColor.off_white_bg)
        emit('handleClick', targetTab)
        change_bg_color(targetTab, themeColor.light_blue_bg)
      }
      const bgs = ref(['demo-text-1', 'demo-text-2', 'demo-text-3', 'demo-text-2', 'demo-text-1'])
      const animationData = ref([{}])
      const bindchange = (e) => {
        let currentTab = e.detail.current
        tab_animation(currentTab)
      }
      return {
        tWidth,
        bgs,
        clickTab,
        animationData,
        bindchange
      }
    }
  })
</script>

<style lang="sass" module>
  @import '../../common/style/common.scss'
  @import './LightComTab.scss'
</style>