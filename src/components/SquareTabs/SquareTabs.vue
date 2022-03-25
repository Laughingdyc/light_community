<template>
  <view :class='$style["tab-panel__content"]'>
    <!-- <AtTabs
      :animated="false"
      :swipeable="false"
      :current="square_current_tab"
      :tabList="tabList1"
      @click="handleClick"
    >
      <AtTabsPane :current="square_current_tab" :index="0">
        <view :class='$style["tab-content"]'>
          <slot name="tab_1"></slot>
        </view>
      </AtTabsPane>
      <AtTabsPane :current="square_current_tab" :index="1">
        <view :class='$style["tab-content"]'>
          <slot name="tab_2"></slot>
        </view>
      </AtTabsPane>
      <AtTabsPane :current="square_current_tab" :index="2">
        <view :class='$style["tab-content"]'>
          <slot name="tab_3"></slot>
        </view>
      </AtTabsPane>
    </AtTabs> -->
    <light-com-tab
      :tabList="tabList1"
      :current="square_current_tab"
      @handleClick="handleClick"
    >
    </light-com-tab>
  </view>
</template>

<script lang="ts">
  import LightComTab from '../../components/LightComTab/LightComTab.vue'
  import { defineComponent } from 'vue'
  import { mapGetters, mapActions} from 'vuex'
  export default defineComponent({
    name: 'AtTabsDemo',
    components: { LightComTab },
    data() {
      return {
        tabList1: [
          
        ],
      }
    },
    props: {
      height: {
        require: false,
        type: String,
        default: 'calc(100vh - 80px)'
      }
    },
    methods: {
      ...mapActions([
        'set_square_current_tab'
      ]),
      handleClick(value) {
        console.log('handleClick', value)
        this.set_square_current_tab(value)
      }
    },
    computed: {
      ...mapGetters([
        'square_current_tab'
      ])
    },
    setup () {}
  })
</script>

<style lang="sass" module>
  @import './SquareTabs.scss'
</style>