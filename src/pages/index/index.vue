<template>
  <view 
    :class="$style.homepage_wrapper"
    :style="{'min-height': windowHeight - 200 + 'px'}"
    @touchstart="touchStart" 
    @touchend="touchEnd"
  >
    <home-page-tabs>
      <template v-slot:tab_1>
        <view :class="$style.wrapper">
          <preview-posts :listData="listData_recommend"></preview-posts>
        </view>
      </template>
      <template v-slot:tab_2>
        <view :class="$style.wrapper">
          <preview-posts :listData="listData_idle"></preview-posts>
        </view>
      </template>
      <template v-slot:tab_3>
        <view :class="$style.wrapper">
          <preview-posts :listData="listData_academic"></preview-posts>
        </view>
      </template>
    </home-page-tabs>
    <view :class="$style.fix_button_wrapper">
      <AtFab>
        <text class='at-fab__icon at-icon at-icon-add'></text>
      </AtFab>
    </view>
  </view>
  <AtTabBar
    backgroundColor='#ececec'
    fixed
    :tabList="[
      { title: '广场', iconType: 'home', },
      { title: '我的', iconType: 'user', }
    ]"
    @click="handleClick"
    :current="0"
  />
</template>

<script lang="ts">
import PreviewPosts, { iListData } from '../../components/PreviewPosts/PreviewPosts.vue'
import HomePageTabs from '../../components/HomePageTabs/HomePageTabs.vue'
import { defineComponent, reactive, toRefs, computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import Taro from '@tarojs/taro'

interface iState {
  listData_recommend: iListData[],
  listData_idle: iListData[],
  listData_academic: iListData[]
}

const default_avatar_1 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fc3%2Fbb%2F20%2Fc3bb20c1b20a8b4cf3ff7c34fb60fa32.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650302670&t=f7e49563c2ab54ab9e1f3b9db841e6b1'
const default_avatar_2 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F2c%2F17%2Fbc%2F2c17bc5f7aa66bbf2118a03e8878aaf2.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650368962&t=0c6e5ae76c71168ff5ed53e9b211a5f9'
const default_avatar_3 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F67%2Fe8%2Fa2%2F67e8a20b97e788fd1fe4b158a5246861.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650369174&t=7323c385c951edbcbf86be9d2adfd489'

export default defineComponent ({
  name: 'Index',
  components: {
    PreviewPosts,
    HomePageTabs
  },
  setup () {
    onMounted(() => {
      getScreenWH()
    })
    const store = useStore()
    const current_tab = computed(() => store.getters.homepage_current_tab)
    const windowHeight = ref(0)
    const state:iState = reactive({
      listData_recommend: [
        { 
          id: 0,
          avatar: default_avatar_1,
          name: '飞翔的豆腐', 
          time: '3 mins ago',
          content: '人常常都是这么误会自己的，以为自己恋旧，以为自己长情，其实只是现在过得不好而已。时光扑面而来，你们终将释怀。​',
          views: 9999,
          comments: 222,
          imgs: [] 
        },{ 
          id: 1,
          avatar: default_avatar_1,
          name: '飞翔的豆腐', 
          time: '3 mins ago',
          content: '让你焦虑的不是能不能如愿以偿。让你焦虑的是能不能马上如愿以偿。​',
          views: 9999,
          comments: 222,
          imgs: [default_avatar_1] 
        },{ 
          id: 2,
          avatar: default_avatar_1,
          name: '飞翔的豆腐', 
          time: '3 mins ago',
          content: '我们会爱谁，是因为我们恰好遇到谁。​',
          views: 9999,
          comments: 222,
          imgs: [default_avatar_1, default_avatar_1] 
        },{ 
          id: 3,
          avatar: default_avatar_1,
          name: '飞翔的豆腐', 
          time: '3 mins ago',
          content: '你站在路边低头点烟,风好像吹红了你的眼​',
          views: 9999,
          comments: 222,
          imgs: [default_avatar_1, default_avatar_1, default_avatar_1] 
        }
      ],
      listData_idle: [
        {
          id: 4,
          avatar: default_avatar_2,
          name: 'DoYouCare', 
          time: '2022/3/20 19:50:20',
          content: '不必匆忙，不必火花四溅，不必成为别人，只需成为自己。',
          views: 9999,
          comments: 222,
          imgs: [default_avatar_2, default_avatar_2, default_avatar_2] 
        }
      ],
      listData_academic: [
        {
          id: 5,
          avatar: default_avatar_3,
          name: 'DoYouCare', 
          time: '1898/3/20 19:50:20',
          content: '不必匆忙，不必火花四溅，不必成为别人，只需成为自己。',
          views: 9999,
          comments: 222,
          imgs: [default_avatar_1, default_avatar_2, default_avatar_3] 
        }
      ]
    })
    const touch_state = reactive({
      touch_time : 0,
      touch_offset_x: 0,
      touch_offset_y: 0,
    }),
    /**
     * 记录触摸数据, 初始时间 & 初始x轴位置
     * @param e 触摸事件
     */
    touchStart = (e) => {
      touch_state.touch_offset_y = e.mpEvent.changedTouches[0].pageY
      touch_state.touch_offset_x = e.mpEvent.changedTouches[0].pageX
      touch_state.touch_time = e.mpEvent.timeStamp
    },
    /**
     * 计算触摸数据, 触摸时间 & x,y轴位移
     * Y轴移动 > 30px | 触摸时间 > 0.5s, 判定为误触
     * X轴移动 > 60px, 进行tab切换
     * @param e 触摸事件
     */
    touchEnd = (e) => {
      touch_state.touch_offset_x = e.mpEvent.changedTouches[0].pageX - touch_state.touch_offset_x
      touch_state.touch_offset_y = e.mpEvent.changedTouches[0].pageY - touch_state.touch_offset_y
      touch_state.touch_time = e.mpEvent.timeStamp - touch_state.touch_time
      if ( Math.abs(touch_state.touch_offset_y) > 30 ) {
        return
      }
      if ( touch_state.touch_time > 500 ) {
        return
      }
      if ( touch_state.touch_offset_x < -60 ) {
        goNextTab()
      } else if ( touch_state.touch_offset_x > 60 ) {
        goPrevTab()
      }
    },
    /**
     * 上一个TAB页
     */
    goPrevTab = () => {
      current_tab.value !== 0
        && store.dispatch('set_homepage_current_tab', current_tab.value - 1)
    },
    /**
     * 下一个TAB页
     */
    goNextTab = () => {
      current_tab.value !== 2
        && store.dispatch('set_homepage_current_tab', current_tab.value + 1)
    },
    /**
     * 获取屏幕宽高
     */
    getScreenWH = () => {
      Taro.getSystemInfo({
        success(res) {
          windowHeight.value = res.windowHeight
        }
      })
    },
    handleClick = () => {}
    
    
    return {
      ...toRefs(state),
      ...toRefs(touch_state),
      current_tab,
      windowHeight,
      getScreenWH,
      touchStart,
      touchEnd,
      goPrevTab,
      goNextTab,
      handleClick
    }
  }
})
</script>

<style lang="sass" module>
 @import './index.scss'
</style>
