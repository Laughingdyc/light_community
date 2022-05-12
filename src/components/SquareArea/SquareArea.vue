<template>
  <Light-com-tab
    :tabList="tabList"
    :current="current_tab"
    @handleClick="handleClick"
  >
    <template v-slot:tab_0>
      <view :class="$style.wrapper">
        <At-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image, image, divider, list-item-avatar-two-line, image, image, image" :loading="isLoading.tab_0">
          <Preview-posts @tap="goContentDetail()" :listData="listData_recommend"></Preview-posts>
        </At-skeleton>
      </view>
    </template>
    <template v-slot:tab_1>
      <view :class="$style.wrapper">
        <At-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image, image, divider, list-item-avatar-two-line, image, image, image" :loading="isLoading.tab_1">
          <Preview-posts :listData="listData_idle"></Preview-posts>
        </At-skeleton>
      </view>
    </template>
    <template v-slot:tab_2>
      <view :class="$style.wrapper">
        <At-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image, image, divider, list-item-avatar-two-line, image, image, image" :loading="isLoading.tab_2">
          <Preview-posts :listData="listData_academic"></Preview-posts>
        </At-skeleton>
      </view>
    </template>
    <template v-slot:tab_3>
      <view :class="$style.wrapper">
        <At-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image, image, divider, list-item-avatar-two-line, image, image, image" :loading="isLoading.tab_3">
          <Preview-posts :listData="listData_make_frds"></Preview-posts>
        </At-skeleton>
      </view>
    </template>
  </Light-com-tab>
</template>

<script lang="ts">
  import { listData_recommend, listData_idle, listData_academic, listData_make_frds } from "../../common/ts/static_data_for_dev"
  import LightComTab from '../../components/LightComTab/LightComTab.vue'
  import PreviewPosts from '../../components/PreviewPosts/PreviewPosts.vue'
  import { iState } from '../../common/ts/common.interface'
  import { defineComponent, reactive, toRefs, computed, ref, onMounted } from 'vue'
  import { useStore } from 'vuex'
  // import Taro from "@tarojs/taro"
  

  export default defineComponent ({
    name: 'homepage',
    components: {
      PreviewPosts,
      LightComTab
    },
    setup () {
      onMounted(() => {
        // 目前mock一下数据
        // Taro.request({
        //   url: 'https://www.lightcommunity.com/squareList', //仅为示例，并非真实的接口地址
        //   data: {
        //     type: '0'
        //   },
        //   header: {
        //     'content-type': 'application/json' // 默认值
        //   },
        //   success: function (res) {
        //     isLoading.value.tab_0 = false
        //     state.listData_recommend = res.data
        //   }
        // })
        setTimeout(() => {
          isLoading.value.tab_0 = false
          state.listData_recommend = listData_recommend
        }, 500);
      })
      const isLoading = ref({
        tab_0: true,
        tab_1: true,
        tab_2: true,
        tab_3: true,
      })
      const current_tab = computed(() => store.getters.square_current_tab)
      const tabList = ref(['推荐', '二手闲置', '学术讨论', '交友互动', '工作招聘'])
      const store = useStore()
      const state:iState = reactive({
        listData_recommend: [],
        listData_idle: [],
        listData_academic: [],
        listData_make_frds: []
      })
      /**
       * tab页切换动作
       */
      const handleClick = (value) => {
        store.dispatch('set_square_current_tab', value).then(() => {
          setTimeout(() => {
            isLoading.value[`tab_${current_tab.value}`] = false
            switch (current_tab.value) {
              case 0:
                state.listData_recommend = listData_recommend
                break;
              case 1:
                state.listData_idle = listData_idle
                break;
              case 2:
                state.listData_academic = listData_academic
                break;
              case 3:
                state.listData_make_frds = listData_make_frds
                break;
            }
          }, 500);
        })
      }
      const goContentDetail = () => {
        console.log('clicked')
      }
      return {
        ...toRefs(state),
        current_tab,
        tabList,
        handleClick,
        isLoading,
        goContentDetail
      }
    }
  })
</script>

<style lang="sass" module>
  @import '../../common/style/common.scss'
  @import './SquareArea.scss'
</style>
