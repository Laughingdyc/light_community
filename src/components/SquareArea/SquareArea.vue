<template>
  <light-com-tab
    :tabList="tabList"
    :current="current_tab"
    @handleClick="handleClick"
  >
    <template v-slot:tab_0>
      <view :class="$style.wrapper">
        <at-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image " :loading="isLoading.tab_0">
          <preview-posts :listData="listData_recommend"></preview-posts>
        </at-skeleton>
      </view>
    </template>
    <template v-slot:tab_1>
      <view :class="$style.wrapper">
        <at-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image" :loading="isLoading.tab_1">
          <preview-posts :listData="listData_idle"></preview-posts>
        </at-skeleton>
      </view>
    </template>
    <template v-slot:tab_2>
      <view :class="$style.wrapper">
        <at-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image" :loading="isLoading.tab_2">
          <preview-posts :listData="listData_academic"></preview-posts>
        </at-skeleton>
      </view>
    </template>
    <template v-slot:tab_3>
      <view :class="$style.wrapper">
        <at-skeleton type="list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, paragraph, divider, list-item-avatar-two-line, image" :loading="isLoading.tab_3">
          <preview-posts :listData="listData_make_frds"></preview-posts>
        </at-skeleton>
      </view>
    </template>
  </light-com-tab>
</template>

<script lang="ts">
  import { listData_recommend, listData_idle, listData_academic, listData_make_frds } from "../../common/ts/static_data_for_dev"
  import LightComTab from '../../components/LightComTab/LightComTab.vue'
  import PreviewPosts, { iListData } from '../../components/PreviewPosts/PreviewPosts.vue'
  import { defineComponent, reactive, toRefs, computed, ref, onMounted } from 'vue'
  import { useStore } from 'vuex'
  

  interface iState {
    listData_recommend: iListData[],
    listData_idle: iListData[],
    listData_academic: iListData[],
    listData_make_frds: iListData[],
  }

  

  export default defineComponent ({
    name: 'homepage',
    components: {
      PreviewPosts,
      LightComTab
    },
    setup () {
      onMounted(() => {
        setTimeout(() => {
          isLoading.value.tab_0 = false
          state.listData_recommend = listData_recommend
        }, 2000);
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
          }, 2000);
        })
      }
      return {
        ...toRefs(state),
        current_tab,
        tabList,
        handleClick,
        isLoading
      }
    }
  })
</script>

<style lang="sass" module>
  @import '../../common/style/common.scss'
  @import './SquareArea.scss'
</style>
