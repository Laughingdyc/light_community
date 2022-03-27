<template>
  <view :class="[$style.wrapper, 'animate__animated animate__fadeInUp']" v-for="(data, index) in listData" :key="data.id">
    <view :class="[$style.user_info_wrapper, ]">
      <AtAvatar :class="$style.avatar" size='small' :circle='true' :image='data.avatar'></AtAvatar>
      <view :class="$style.exclude_avatar_wapper">
        <view :class="[$style.top_and_bot, $style.top_view]">
          <text :class="$style.name">{{ data.name }}</text>
          <text :class="$style.time">{{ data.time }}</text>
        </view>
        <view :class="[$style.top_and_bot, $style.bot_view]">
          <text :class="$style.views">{{ data.views + '阅读' }}</text>
          <text :class="$style.comments">{{ data.comments + '评论' }}</text>
        </view>
      </view>
    </view>
    <view :class="[$style.content_wrapper, $style['at-article']]">
      <view :class="$style['at-article__p']">
        {{ data.content }}
      </view>
    </view>
    <view :class="$style.pre_pic_wrapper">
      <image 
        v-if="data.imgs[0]"
        :class="$style.pre_pic"
        mode="{{ 'aspectFit' }}" 
        :src="data.imgs[0]">
      </image>
      <image 
        v-if="data.imgs[1]"
        :class="$style.pre_pic"
        mode="{{ 'aspectFit' }}" 
        :src="data.imgs[1]">
      </image>
      <image 
        v-if="data.imgs[2]"
        :class="$style.pre_pic"
        mode="{{ 'aspectFit' }}" 
        :src="data.imgs[2]">
      </image>
      <view v-if="data.imgs[2]" :class="$style.pre_pic_hide">
        <text>{{ '更多' }}</text>
      </view>
    </view>
    <view :class="$style.tag_wrapper" v-if="showTag && data.tagName">
      <view :class="$style['tag']" class='at-icon at-icon-tag'>
        <text :class="$style['tag']">{{ data.tagName }}</text>
      </view>
    </view>
    <AtDivider v-if="listData && (index < listData.length - 1)" content='' height='60' lineColor='#eeeeee' />
  </view>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, PropType, onMounted } from 'vue'
  import { iListData } from '../../common/ts/common.interface'

  export default defineComponent ({
    props: {
      listData: {
        require: true,
        type: Object as PropType<iListData[]>
      },
      showTag: {
        require: false,
        type: Boolean,
        default: false
      },
    },
    setup () {
      const state = reactive({})
      onMounted(() => {
      })
      return {
        ...toRefs(state)
      }
    }
  })
</script>

<style lang="sass" module>
  @import '../../common/style/common.scss'
  @import "taro-ui-vue3/dist/style/components/article.scss"
  @import './PreviewPosts.scss'
</style>