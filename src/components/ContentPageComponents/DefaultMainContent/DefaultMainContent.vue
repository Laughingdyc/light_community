<template>
  <view :class="$style['content-outer-wrapper']">
    <view :class="$style['content-header']">
      {{ content_data.title }}
    </view>
    <view :class="$style['content-inner-wrapper']">
      <view>
        <view :class="$style['content-authore-wrapper']">
          <AtAvatar v-if="content_data.avatar" :class="$style['content-avatar']" size='small' :circle='true' :image='content_data.avatar'></AtAvatar>
          <view :class="$style['content-author-wrapper']">
            <text :class="$style['content-author-name']">{{ content_data.author }}</text>
            <text :class="$style['content-post-info']">{{ content_data.post_time }}</text>
          </view>
        </view>
        <view :class="$style['content']">
          {{ content_data.content }}
        </view>
      </view>
    </view>
    <view :class="$style['icons-wrapper']">
      <view :class="$style['icon-wrapper']">
        <text class="icon-view" :class="[$style['icon-view']]"></text>
        <text :class="$style['icons-desc']">{{ content_data.views }}</text>
      </view>
      <view :class="$style['icon-wrapper']" @tap="toggleLikeStatus(content_data.is_like)">
        <text v-if="!content_data.is_like" class="icon-thumbs-up" :class="[$style['icon-thumbs-up']]"></text>
        <text v-if=" content_data.is_like" class="icon-thumbs-up-full" :class="[$style['icon-thumbs-up-full']]"></text>
        <text :class="$style['icons-desc']">{{ content_data.like_count }}</text>
      </view>
      
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: [
    'content_data'
  ],
  setup(props) {
    const store = useStore()
    const { content_data } = toRefs(props)
    onMounted(() => {
      // store.dispatch('set_comments___reply_attr', { reply_focus: true, temp_input_visible: true,})
    })

    /**
     * 切换点赞/踩状态
     * @param {string}  type 'like' - 赞, 'dislike' - 踩
     * @param {boolean} pre_status 点击前的状态
     */
    const toggleLikeStatus = ( pre_status ) => {
      content_data.value.is_like = !pre_status
      pre_status 
        ? content_data.value.like_count --
        : content_data.value.like_count ++
      store.dispatch('set_comments___main_content', { is_like: !pre_status, like_count: content_data.value.like_count })
    }

    return {
      toggleLikeStatus
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './DefaultMainContent.scss'
</style>