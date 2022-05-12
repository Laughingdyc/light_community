<template>
  <view :class="$style['comments-outer-wrapper']">
    <view :class="$style['comments-inner-wrapper']">
      <view :class="$style['avatar-wrapper']">
        <AtAvatar v-if="avatar" :class="$style['avatar']" size='small' :circle='true' :image='avatar'></AtAvatar>
      </view>
      <view :class="{[$style['comment-wrapper']]: true, [$style['comment-bottom-line']]: showLine,}">
        <view :class="$style['comment-author-name']">{{ '飞翔的豆腐2' }}</view>
        <view :class="$style['comment-content']">{{ '我发现，男人最后一般都会和自己的老婆结婚' }}</view>

        <!-- START 子评论 -->
        <view :class="$style['sub-comment-wrapper']">
          <view :class="$style['sub-comment']" v-for="subComment in subComments" :key="subComment.id">
            <text :class="$style['sub-comment-author']">{{ subComment.author }}</text>
            <text :class="$style['sub-comment-reply-wrapper']" v-if="subComment.comment_type === 2">
              <text :class="$style['sub-comment-reply']">{{ ' 回复 ' }}</text>
              <text :class="$style['sub-comment-reply-to']">{{ subComment.reply_to }}</text>
            </text>
            <text :class="$style['sub-comment-content']">{{ ': ' + subComment.content }}</text>
          </view>
        </view>
        <!-- END 子评论 -->

        <view :class="$style['comment-info-wrapper']">
          <text :class="$style['comment-time']">{{ '02-12 22:33' }}</text>
          <view :class="$style['comment-operate-wrapper']">
            <text>
              <text class="icon-bubble2" :class="[$style['icon-bubble2'], $style['icon']]"></text>
              <text :class="$style['icons-desc']">{{ '2' }}</text>
            </text>
            <text>
              <text class="icon-thumbs-up" :class="[$style['icon-thumbs-up'], $style['icon']]"></text>
              <text :class="$style['icons-desc']">{{ '1' }}</text>
            </text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  props: {
    showLine: {
      require: false,
      type: Boolean,
      default: false
    },
  },
  setup() {
    const avatar = ref('')
    const bg_style = ref({})
    const img_style = ref({})
    const subComments = ref()
    onMounted(() => {
      avatar.value = `http://175.27.165.106/static/logo.jpg`
      subComments.value = [
        {
          id: 1,
          comment_type: 1, // 1 - 回复层主, 2 - 回复楼中楼
          author: '飞翔的豆腐3',
          reply_to: '飞翔的豆腐2',
          content: '还真是的！我几个好朋友都是和自己老婆结婚的'
        },{
          id: 2,
          comment_type: 2, // 1 - 回复层主, 2 - 回复楼中楼
          author: '飞翔的豆腐4',
          reply_to: '飞翔的豆腐3',
          content: '假的。我认识的，都是娶了别人的女儿'
        },
      ]
    })

    return {
      bg_style,
      img_style,
      avatar,
      subComments
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './DefaultComments.scss'
</style>