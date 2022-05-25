<template>
  <view :class="$style['comments-outer-wrapper']">
    <view :class="$style['comments-inner-wrapper']">
      <view :class="$style['avatar-wrapper']">
        <AtAvatar v-if="content.avatar" :class="$style['avatar']" size='small' :circle='true' :image='content.avatar'></AtAvatar>
      </view>
      <view :class="{[$style['comment-wrapper']]: true, [$style['border-bottom']]: !mian}">
        <view :class="$style['comment-author-name']">
          <text>{{ content.author }}</text>
          
        </view>
        <view :class="$style['comment-content']">
          <text v-if="content.comment_type === 2">{{ '回复' }}</text>
          <text v-if="content.comment_type === 2"  :class="[$style['comment-author-name'], $style['comment-reply-name']]">{{ content.reply_to }}</text>
          <text v-if="content.comment_type === 2">{{ ': ' }}</text>
          <text>{{ content.content }}</text>
        </view>
        <view :class="$style['comment-info-wrapper']">
          <text :class="$style['comment-time']">{{ '02-12 22:33' }}</text>
          <view :class="$style['comment-operate-wrapper']">
            <text @tap="$emit('toggleLikeStatus', content.is_like, content.like_count, index, id, )">
              <text v-if="!content.is_like" class="icon-thumbs-up" :class="[$style['icon-thumbs-up']]"></text>
              <text v-if=" content.is_like" class="icon-thumbs-up-full" :class="[$style['icon-thumbs-up-full']]"></text>
              <text :class="$style['icons-desc']">{{ content.like_count }}</text>
            </text>
            <text>
              <text class="icon-comment" :class="[$style['icon-comment']]"></text>
              <text v-if="index === -1" :class="$style['icons-desc']">{{ length }}</text>
            </text>
          </view>
        </view>

      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:[
    'mian',
    'content',
    'index',
    'length',
    'id'
  ], 
  setup() {},
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './DefaultSubComment.scss'
</style>