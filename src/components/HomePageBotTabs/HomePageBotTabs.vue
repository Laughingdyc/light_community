<template>
  <view :class="$style.fix_button_wrapper">
    <AtFab @click="handleSubmitBtn">
      <view :animation="animationData" class='at-fab__icon at-icon at-icon-add'></view>
    </AtFab>
  </view>
  <AtTabBar
    backgroundColor='#ececec'
    fixed
    :tabList="tabList"
    @click="handleClick($event)"
    :current="current_tab"
  />
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from "vue"
  import { useStore } from 'vuex'
  import Taro from '@tarojs/taro'
  interface iBarcolor {
    frontColor: string;
    backgroundColor: string;
    animation?: {
      duration: number;
      timingFunc: "easeIn" | "linear" | "easeOut" | "easeInOut" | undefined;
    }
  }
  const barColors: iBarcolor[] = [
    {
      frontColor: '#000000',
      backgroundColor: '#ffffff',
      animation: {
        duration: 500,
        timingFunc: 'easeIn'
      }
    },{
      frontColor: '#ffffff',
      backgroundColor: '#facd91',
      animation: {
        duration: 100,
        timingFunc: 'easeIn'
      }
    },
  ]
  let _ratate = 0
  const _animation = ( speed: 'slow' | 'fast' ) => {
    switch (speed) {
      case 'slow':
        return Taro.createAnimation({
          duration: 1000,
          timingFunction: 'ease-in-out',
        })
      case 'fast':
        return Taro.createAnimation({
          duration: 300,
          timingFunction: 'ease-in-out',
        })
    }
  }
  export default defineComponent({
    setup() {
      const tabList = ref([
        { title: '广场', iconType: 'home', NavBarName: '轻工大集市'},
        { title: '我的', iconType: 'user', NavBarName: '个人主页'}
      ])
      const store = useStore()
      const animationData = ref({})

      onMounted(() => {
        slowRotate()
        handleClick(1)
      })
      /**
       * 入页按钮慢旋转
       */
      const slowRotate = () => {
        const animation = _animation('slow')
        setTimeout(() => {
          _ratate += 1800
          animation.rotate(_ratate).step()
          animationData.value = animation.export()
        }, 300)
      }
      /**
       * 点击按钮快旋转
       */
      const fastRotate = () => {
        const animation = _animation('fast')
        _ratate += 180
        animation.rotate(_ratate).step()
        animationData.value = animation.export()
      }
      const current_tab = computed(() => store.getters.homepage_bot_tab)
      /**
       * AtTabBar 点击事件
       * @param {Number} $event 0 - 广场, 1 - 我的
       */
      const handleClick = ($event: Number) => {
        store.dispatch('set_homepage_bot_tab', $event)
        Taro.setNavigationBarTitle({
          title: tabList['value'][current_tab.value]['NavBarName']
        })
        Taro.setNavigationBarColor(barColors[current_tab.value])
      }
      const handleSubmitBtn = () => {
        fastRotate()
        setTimeout(() => {
          Taro.navigateTo({ url: '/pages/testpage/testpage' })
        }, 300);
      }
  
      return {
        tabList,
        current_tab,
        handleClick,
        animationData,
        handleSubmitBtn
      }
    }
  })
</script>

<style lang="sass" module>
  @import './HomePageBotTabs.scss'
</style>