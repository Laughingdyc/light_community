<template>
  <view :class="$style.fix_button_wrapper">
    <AtFab>
      <text class='at-fab__icon at-icon at-icon-add'></text>
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
  import { computed, defineComponent, ref } from "vue"
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
  export default defineComponent({
    setup() {
      const tabList = ref([
        { title: '广场', iconType: 'home', NavBarName: '轻工大集市'},
        { title: '我的', iconType: 'user', NavBarName: '个人主页'}
      ])
      const store = useStore()
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
  
      return {
        tabList,
        current_tab,
        handleClick
      }
    }
  })
</script>

<style lang="sass" module>
  @import './HomePageBotTabs.scss'
</style>