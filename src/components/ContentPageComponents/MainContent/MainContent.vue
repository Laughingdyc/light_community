<template>
  <canvas type="2d" id="bg-canvas" :class="$style['bg-canvas']"></canvas>
  <view :class="$style['bg-wrapper']">
    <view :class="$style['top-bg-wrapper']" :style="img_style"></view>
    <view :class="$style['bg-major-color']" :style="bg_style"></view>
  </view>

  <view :class="$style['content-outer-wrapper']">
    <view :class="$style['content-inner-wrapper']">
      <view>
        <view :class="$style['content-authore-wrapper']">
          <AtAvatar v-if="avatar" :class="$style['content-avatar']" size='small' :circle='true' :image='avatar'></AtAvatar>
          <view :class="$style['content-author-wrapper']">
            <text :class="$style['content-author-name']">{{ '飞翔的豆腐' }}</text>
            <text :class="$style['content-post-info']">{{ '14评论 222阅读' }}</text>
          </view>
        </view>
        <view :class="$style['content-header']">
          {{ '<小王子>' }}
        </view>
        <view :class="$style['content']">
          {{ `当你真的喜欢一个人的时候，就会想很多，会很容易办蠢事，说傻话。在这颗蓝色的星球上，我本有着阻挡一切困难的勇气，但在喜欢你这件事上，我脆弱地像一个孤单的小鬼。` }}
        </view>
      </view>
      <view :class="$style['post-time']">
        {{ '2022-04-28 00:35:20' }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const avatar = ref('')
    const bg_style = ref({})
    const img_style = ref({})
    const test_random_avatar = () => {
      let index = Math.floor(Math.random() * 8 + 1)
      avatar.value = `http://175.27.165.106/static/${index}.png`
    }
    onMounted(() => {
      test_random_avatar()

      const calc_rgb = (arr) => {
        let R = 0
        let B = 0
        let G = 0
        for (let i = 0; i < 400; i ++) {
          if ( i % 4 === 0 ) {
            R += (arr[i] / 100)
          } else if ( i % 4 === 1 ) {
            G += (arr[i] / 100)
          } else if ( i % 4 === 2 ) {
            B += (arr[i] / 100)
          } 
        }
        return `(${R}, ${G}, ${B}, 1)`
      }
      // 按顺序执行或者0秒settime都会导致拿不到res(因为生命周期原因? 下次试试小程序的生命周期.), 就加了一个0.1秒延后执行.
      setTimeout(() => {
        const query = Taro.createSelectorQuery()
        query.select('#bg-canvas').fields({ node: true, size: true, }).exec(
          (res) => {
            console.log(res)
            const canvas = res[0].node
            const ctx = canvas.getContext('2d')
            const img = canvas.createImage()
            ctx.clearRect(0, 0, 0, 0)
            img.src = avatar.value
            img.onload = () => {
              ctx.drawImage(img, 0, 0, 100, 100)
              let imgData = (ctx.getImageData(0, 0, img.width, img.height)).data
              var majorColor = calc_rgb(imgData)
              img_style.value = {
                'backgroundImage': `linear-gradient(rgba(0,0,0,0), rgba${majorColor}), url(${avatar.value})`
              }
              bg_style.value = {
                'backgroundImage': `linear-gradient(rgb${majorColor}, rgba(0,0,0,0))`
              }
            }
          }
        )
      }, 100)
    })

    return {
      bg_style,
      img_style,
      avatar
    }
  },
})
</script>

<style lang="sass" module>
  @import '../../../common/style/common.scss'
  @import './MainContent.scss'
</style>