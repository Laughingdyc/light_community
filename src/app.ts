import { createApp } from 'vue'
import { createUI } from 'taro-ui-vue3'
import store from './store/store'
import { 
  AtIcon,
  AtButton, 
  AtInput, 
  AtTabs,
  AtAvatar,
  AtDivider,
  AtTabsPane,
  AtTabBar,
  AtFab,
  AtSkeleton
} from 'taro-ui-vue3/lib'

import 'taro-ui-vue3/dist/style/components/icon.scss'
import 'taro-ui-vue3/dist/style/components/button.scss'
import 'taro-ui-vue3/dist/style/components/input.scss'
import 'taro-ui-vue3/dist/style/components/tabs.scss'
import 'taro-ui-vue3/dist/style/components/avatar.scss'
import "taro-ui-vue3/dist/style/components/article.scss"
import "taro-ui-vue3/dist/style/components/divider.scss"
import "taro-ui-vue3/dist/style/components/tab-bar.scss"
import "taro-ui-vue3/dist/style/components/fab.scss"
import "taro-ui-vue3/dist/style/components/skeleton.scss"

import './app.scss';
import 'animate.css';

const tuv3 = createUI({
  AtIcon,
  AtButton, 
  AtInput, 
  AtTabs,
  AtAvatar,
  AtDivider,
  AtTabsPane,
  AtTabBar,
  AtFab,
  AtSkeleton
})
const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)
App.use(tuv3)

export default App
