<template>
  <view :class="$style['comments-outer-wrapper']">
    <view :class="$style['comments-inner-wrapper']">
      <view :class="$style['avatar-wrapper']">
        <AtAvatar v-if="data.avatar" :class="$style['avatar']" size='small' :circle='true' :image='data.avatar'></AtAvatar>
      </view>
      <view :class="{[$style['comment-wrapper']]: true, [$style['comment-bottom-line']]: showLine,}">
        <view :class="$style['comment-author-name']">{{ data.author }}</view>
        <view :class="$style['comment-content']">{{ data.content }}</view>

        <!-- START 子评论 -->
        <view v-if="sub_comments.length" :class="$style['sub-comment-wrapper']"  @tap="toShowSubPop">
          <view :class="$style['sub-comment']" v-for="subComment in subComments_visible" :key="subComment.id">
            <text :class="$style['sub-comment-author']">{{ subComment.author }}</text>
            <text :class="$style['sub-comment-reply-wrapper']" v-if="subComment.comment_type === 2">
              <text :class="$style['sub-comment-reply']">{{ ' 回复 ' }}</text>
              <text :class="$style['sub-comment-reply-to']">{{ subComment.reply_to }}</text>
            </text>
            <text :class="$style['sub-comment-content']">{{ ': ' + subComment.content }}</text>
          </view>
          <view v-if="sub_comments.length > 2" :class="$style['sub-comment-btn']" @tap="toggleVisibleStatus">
            <text class="asd">{{ showAllSub ? '收起' : '展开全部' }}</text>
            <text v-if="!showAllSub" class="icon-down2" :class="[$style['icon-down2']]"></text>
            <text v-if=" showAllSub" class="icon-up" :class="[$style['icon-up']]"></text>
          </view>
        </view>
        <!-- END 子评论 -->

        <view :class="$style['comment-info-wrapper']">
          <text :class="$style['comment-time']">{{ data.post_time }}</text>
          <view :class="$style['comment-operate-wrapper']">
            <text @tap="toggleLikeStatus( data.is_like )">
              <text v-if="!data.is_like" class="icon-thumbs-up" :class="[$style['icon-thumbs-up']]"></text>
              <text v-if=" data.is_like" class="icon-thumbs-up-full" :class="[$style['icon-thumbs-up-full']]"></text>
              <text :class="$style['icons-desc']">{{ data.like_count }}</text>
            </text>
            <text>
              <text class="icon-comment" :class="[$style['icon-comment']]"></text>
              <text :class="$style['icons-desc']">{{ sub_comments.length }}</text>
            </text>
          </view>
        </view>

      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs  } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: [
    'showLine', 
    'data'
  ],
  setup(props) {
    const { data } = toRefs(props)
    const store = useStore()
    const subComments_visible = ref()       // 可见的子评论
    const showAllSub          = ref(false)  // 是否展示所有子评论
    const sub_comments = ref(data?.value?.children)
    onMounted(() => {
      subComments_visible.value = sub_comments.value.slice(0, 2)
    })

    // 展示子评论弹窗 
    const toShowSubPop = () => {
      store.dispatch('set_comments___pop_comment', data)
      store.dispatch('set_comments___show_sub_pop', true)
    }

    const toggleVisibleStatus = (e) => {
      e.stopPropagation()
      showAllSub.value = !showAllSub.value
      subComments_visible.value = showAllSub.value ? sub_comments.value : sub_comments.value.slice(0, 2)
    }

    /**
     * 点赞 / 取消点赞
     */
    const toggleLikeStatus = (pre_is_like) => {
      let _id = { _id: data?.value?.id }
      store.dispatch('set_comments___comment', { ..._id ,is_like: !pre_is_like })
      pre_is_like 
        ? store.dispatch('set_comments___comment', { ..._id, like_count: data?.value?.like_count - 1 })
        : store.dispatch('set_comments___comment', { ..._id, like_count: data?.value?.like_count + 1 })
    }

    return {
      sub_comments,
      subComments_visible,
      showAllSub,
      toggleVisibleStatus,
      toggleLikeStatus,
      toShowSubPop,
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './DefaultComments.scss'
</style>