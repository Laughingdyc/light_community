<template>
  <view :class="$style['avatar_wrapper_top']">
    <view :class="$style['avatar_wrapper']">
      <image 
        :class="$style['avatar']"
        mode="{{ 'aspectFit' }}" 
        :src="avatar">
      </image>
      <view :class="$style['edit_wrapper']">
        <text @tap="click_edit()" :class="[$style['edit'], animate__headShake]">{{ '编辑' }}</text>
        <view :class="$style['identity']" class='at-icon at-icon-sketch animate__animated animate__swing'>
          <text :class="$style['identity']">{{ '校园认证' }}</text>
        </view>
      </view>
    </view>
  </view>
  <view :class="$style['avatar_wrapper_bot']"></view>
  <view :class="$style['userinfo_wrapper']">
    <text :class="$style['username']">{{ '飞翔的豆腐' }}</text>
    <text :class="$style['userid']">{{ '学号：' + '1601110888' }}</text>
  </view>
  <view :class="$style['mine_tabs_wrapper']">
    <light-com-tab
    :tabList="tabList"
    :current="current_tab"
    :tabWidth="75"
    :height="'calc(100vh - 455rpx)'"
    @handleClick="handleClick"
  >
    <template v-slot:tab_0>
      <view :class="$style['content_wrapper']">
        <at-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image, image, image" :loading="isLoading.tab_0">
          <preview-posts :listData="listData_self_post" :showTag="true"></preview-posts>
        </at-skeleton>
      </view>
    </template>
    <template v-slot:tab_1>
      <view :class="$style['content_wrapper']">
        <at-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image, image, image" :loading="isLoading.tab_1">
          <preview-posts :listData="listData_self_participate" :showTag="true"></preview-posts>
        </at-skeleton>
      </view>
    </template>
    <template v-slot:tab_2>
      <view :class="$style['content_wrapper']">
        <at-skeleton type="list-item-avatar-two-line, divider, list-item-avatar-two-line, divider, list-item-avatar-two-line, divider, list-item-avatar-two-line, divider" :loading="isLoading.tab_2">
          <mine-message :listData="mine_message_list"></mine-message>
        </at-skeleton>
      </view>
    </template>
  </light-com-tab>
  </view>
</template>

<script lang='ts'>
  import LightComTab from '../../components/LightComTab/LightComTab.vue'
  import PreviewPosts from '../../components/PreviewPosts/PreviewPosts.vue'
  import { computed, defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
  import { iListData, iMessage } from '../../common/ts/common.interface'
  import { useStore } from 'vuex'
  import { listData_recommend, mine_message_list } from "../../common/ts/static_data_for_dev"
  import MineMessage from '../MineMessage/MineMessage.vue'
  interface iState {
    listData_self_post: iListData[],
    listData_self_participate: iListData[],
    mine_message_list: iMessage[]
  }
  const default_avatar_1 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fc3%2Fbb%2F20%2Fc3bb20c1b20a8b4cf3ff7c34fb60fa32.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650302670&t=f7e49563c2ab54ab9e1f3b9db841e6b1'
  export default defineComponent ({
    components: {
      LightComTab,
      PreviewPosts,
      MineMessage
    },
    data() {
      return{
        avatar: default_avatar_1,
      }
    },
    setup() {
      onMounted(() => {
        setTimeout(() => {
          isLoading.value.tab_0 = false
          const tags = ['二手闲置', '学术讨论', '交友互动', '工作招聘']
          state.listData_self_post = listData_recommend.map((data) => {
            data['tagName'] = tags[data.type]
            return data
          })
        }, 2000);
      })
      const state: iState = reactive({
        listData_self_post: [],
        listData_self_participate: [],
        mine_message_list: [],
      })
      const store = useStore()
      const current_tab = computed(() => store.getters.mine_current_tab)
      const tabList = ref(['我的动态', '我参与的', '消息通知'])
      const isLoading = ref({
        tab_0: true,
        tab_1: true,
        tab_2: true,
      })
      const animate__headShake = ref('')
      /**
       * 点击编辑触发动画
       */
      const click_edit = () => {
        animate__headShake.value = 'animate__animated animate__headShake'
        setTimeout(() => {
          animate__headShake.value = ''
        }, 1000);
      }
      /**
       * tab页切换动作
       */
      const handleClick = (value) => {
        store.dispatch('set_mine_current_tab', value).then(() => {
          setTimeout(() => {
            isLoading.value[`tab_${current_tab.value}`] = false
            switch (current_tab.value) {
              case 0:
                state.listData_self_post = listData_recommend
                break;
              case 1:
                state.listData_self_participate = listData_recommend
                break;
              case 2:
                state.mine_message_list = mine_message_list
                break;
            }
          }, 500);
        })
      }
      return {
        ...toRefs(state),
        isLoading,
        tabList,
        animate__headShake,
        click_edit,
        current_tab,
        handleClick
      }
    }
  })
</script>

<style lang='sass' module>
  @import '../../common/style/common.scss'
  @import './MineArea.scss'
</style>