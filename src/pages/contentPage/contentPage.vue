<template>
  <!-- 内容区域 -->
  <view :class="$style['content-outer-wrapper']">
    <Default-main-content v-if="data" :content_data="data"></Default-main-content>
  
    <Default-tab></Default-tab>
  
    <Default-comments 
      v-for="(comment, index) in data.comments" 
      :key="comment.id" 
      :data="comment"
      :showLine="index !== (data.comments.length - 1)"
    ></Default-comments>
  </view>

  <!-- 回复 -->
  <Default-reply></Default-reply>
  
  <!-- 子评论弹窗 -->
  <page-container 
    :show  = "show_sub_pop"
    :round = "true"
    @afterleave = "afterleave"
  >
    <scroll-view :class="$style['sub-comment-pop']" :scroll-y="true">
      <!-- 内容区域 -->
      <Default-sub-comment-pop></Default-sub-comment-pop>
      <!-- 回复 -->
      <Default-reply></Default-reply>
    </scroll-view>
  </page-container>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import DefaultTab from '../../components/ContentPageComponents/DefaultTab/DefaultTab.vue'
import DefaultMainContent from '../../components/ContentPageComponents/DefaultMainContent/DefaultMainContent.vue'
import DefaultComments from '../../components/ContentPageComponents/DefaultComments/DefaultComments.vue'
import DefaultReply from '../../components/ContentPageComponents/DefaultReply/DefaultReply.vue'
import DefaultSubCommentPop from '../../components/ContentPageComponents/DefaultSubCommentPop/DefaultSubCommentPop.vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    DefaultTab,
    DefaultMainContent,
    DefaultComments,
    DefaultSubCommentPop,
    DefaultReply
  },
  setup() {
    const store = useStore()
    /**
     * 评论弹窗显隐关键字
     */
    const show_sub_pop = computed(() => store.getters.comments___show_sub_pop)
    /**
     * 帖子数据
     */
    const data = computed(() => store.getters.comments___main_content)
    const afterleave = () => {
      store.dispatch('set_comments___show_sub_pop', false)
    }
    onMounted(() => {
      console.log('13123', data.value.avatar)
    })

    return {
      data,
      show_sub_pop,
      afterleave
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../common/style/common.scss'
  @import './contentPage.scss'
</style>
