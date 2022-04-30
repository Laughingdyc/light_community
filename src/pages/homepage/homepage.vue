<template>
  <view v-show="current_bot_tab === 0" @tap="goContentDetail()">
    <square-area></square-area>
  </view>

  <view v-show="current_bot_tab === 1">
    <mine-area></mine-area>
  </view>

  <home-page-bot-tabs></home-page-bot-tabs>
</template>

<script lang="ts">
  import HomePageBotTabs from '../../components/HomePageBotTabs/HomePageBotTabs.vue'
  import MineArea from '../../components/MineArea/MineArea.vue'
  import SquareArea from '../../components/SquareArea/SquareArea.vue'
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
import Taro from '@tarojs/taro'

  export default defineComponent ({
    name: 'homepage',
    components: {
      SquareArea,
      MineArea,
      HomePageBotTabs,
    },
    setup () {
      const goContentDetail = () => {
        console.log('clicked')
        Taro.navigateTo({
          url: '/pages/contentPage/contentPage'
        })
      }
      const store = useStore()
      const current_bot_tab = computed(() => store.getters.homepage_bot_tab)
      return {
        current_bot_tab,
        goContentDetail
      }
    }
  })
</script>

<style lang="sass" module>
  @import '../../common/style/common.scss'
  @import './homepage.scss'
</style>
