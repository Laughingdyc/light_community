<template>
  <!-- <Background></Background> -->
  <Default-main-content></Default-main-content>
  <Default-tab></Default-tab>
  <Default-comments :showLine="true"></Default-comments>
  <Default-comments></Default-comments>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DefaultTab from '../../components/ContentPageComponents/DefaultTab/DefaultTab.vue'
import DefaultMainContent from '../../components/ContentPageComponents/DefaultMainContent/DefaultMainContent.vue'
import DefaultComments from '../../components/ContentPageComponents/DefaultComments/DefaultComments.vue'
export default defineComponent({
  components: {
    DefaultTab,
    DefaultMainContent,
    DefaultComments
  },
  setup() {
    const comments = ref(10)
    return {
      comments
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../common/style/common.scss'
  @import './contentPage.scss'
</style>
