<template>
  <Default-sub-comment 
    :mian    = "true"
    :index   = "-1"
    :length  = "sub_comments?.length"
    :content = "comment_data"
    @toggleLikeStatus="toggleLikeStatus"
  ></Default-sub-comment>

  <view :class="$style['tab-wrapper']">
    <view :class="$style['tab']">{{ '全部回复' }}</view>
  </view>

  <Default-sub-comment 
    v-for=" sub_comment, index in sub_comments "
    :mian    = "index === (sub_comments?.length - 1)"
    :index   = "index"
    :id      = "sub_comment.id"
    :key     = "sub_comment.id"
    :content = "sub_comment"
    @toggleLikeStatus="toggleLikeStatus"
  ></Default-sub-comment>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import DefaultSubComment from '../DefaultSubComment/DefaultSubComment.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    DefaultSubComment
  },
  setup() {
    const store = useStore()
    const comment_data = computed(() => store.getters.comments___pop_comment)
    const sub_comments = computed(() => comment_data.value.children)

    /**
     * 点赞 / 取消点赞
     */
    const toggleLikeStatus = (pre_is_like, pre_like_count, index, sub_id) => {
      index === -1 
        ? toggleCommentLikeStatus   ( pre_is_like, pre_like_count )
        : toggleSubCommentLikeStatus( pre_is_like, pre_like_count,  sub_id )
      
    }
    /**
     * 点赞 / 取消点赞 评论的
     */
    const toggleCommentLikeStatus = ( pre_is_like, pre_like_count )=> {
      let _id = { _id: comment_data?.value.id }
      store.dispatch('set_comments___comment', { ..._id ,is_like: !pre_is_like })
      pre_is_like 
        ? store.dispatch('set_comments___comment', { ..._id, like_count: pre_like_count - 1 })
        : store.dispatch('set_comments___comment', { ..._id, like_count: pre_like_count + 1 })
    }

    /**
     * 点赞 / 取消点赞 子评论的
     */
    const toggleSubCommentLikeStatus = ( pre_is_like, pre_like_count, sub_id )=> {
      let _id = { _id: comment_data?.value?.id, _sub_id: sub_id }
      store.dispatch('set_comments___comment_child', { ..._id, is_like: !pre_is_like })
      pre_is_like 
        ? store.dispatch('set_comments___comment_child', { ..._id, like_count: pre_like_count - 1 })
        : store.dispatch('set_comments___comment_child', { ..._id, like_count: pre_like_count + 1 })
    }


    return {
      comment_data,
      sub_comments,
      toggleLikeStatus,
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './DefaultSubCommentPop.scss'
</style>