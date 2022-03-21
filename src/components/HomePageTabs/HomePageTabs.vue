<template>
  <view :class='$style["tab-panel__content"]'>
    <AtTabs
      :swipeable="false"
      :current="homepage_current_tab"
      :tabList="tabList1"
      @click="handleClick"
    >
      <AtTabsPane :current="homepage_current_tab" :index="0">
        <view :class='$style["tab-content"]'>
          <slot name="tab_1"></slot>
        </view>
      </AtTabsPane>
      <AtTabsPane :current="homepage_current_tab" :index="1">
        <view :class='$style["tab-content"]'>
          <slot name="tab_2"></slot>
        </view>
      </AtTabsPane>
      <AtTabsPane :current="homepage_current_tab" :index="2">
        <view :class='$style["tab-content"]'>
          <slot name="tab_3"></slot>
        </view>
      </AtTabsPane>
    </AtTabs>
  </view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { mapGetters, mapActions} from 'vuex'
  export default defineComponent({
    name: 'AtTabsDemo',
    data() {
      return {
        tabList1: [
          { title: '推荐' },
          { title: '二手闲置' },
          { title: '学术讨论' },
          // { title: '交友互动' },
          // { title: '工作招聘' }
        ],
      }
    },
    methods: {
      ...mapActions([
        'set_homepage_current_tab'
      ]),
      handleClick(value) {
        this.set_homepage_current_tab(value)
      }
    },
    computed: {
      ...mapGetters([
        'homepage_current_tab'
      ])
    },
    setup () {}
  })
</script>

<style lang="sass" module>
  @import './HomePageTabs.scss'
</style>