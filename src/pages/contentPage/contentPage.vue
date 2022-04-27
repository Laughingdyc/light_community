<template>
  <main-content></main-content>
  <comments></comments>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainContent from '../../components/ContentPageComponents/MainContent/MainContent.vue'
import Comments from '../../components/ContentPageComponents/Comments/Comments.vue'
export default defineComponent({
  components: {
      MainContent,
      Comments
  },
  setup() {
    
  },
})
</script>

<style lang="sass" module>
  @import '../../common/style/common.scss'
  @import './contentPage.scss'
</style>
