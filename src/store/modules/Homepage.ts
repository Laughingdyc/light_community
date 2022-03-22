import Taro from '@tarojs/taro'
const homepage = {
  state: {
    square_current_tab       : 0,           // tab组件的当前值
    square_lastest_scroll_top: [0, 0, 0],   // 广场页面最新的滚动高度
    homepage_bot_tab         : 0,           // botTab组件的当前值
  },
  /**
   * 不建议直接调用 mutations!, 请用 actions 来完成赋值逻辑
   */
  mutations: {
    SET_SQUARE_CURRENT_TAB: (state, value) => {
      state.square_current_tab = value
      // scrollSquare(state)
    },
    SET_SQUARE_LASTEST_SCROLL_TOP: (state, value) => {
      state.square_lastest_scroll_top[state.square_current_tab] = value
    },
    SET_HOMEPAGE_BOT_TAB: (state, value) => {
      state.homepage_bot_tab = value
    },
  },
  actions: {
    set_square_current_tab: ({ commit }, value: number) => {
      return commit('SET_SQUARE_CURRENT_TAB', value)
    },
    set_square_lastest_scroll_top: ({ commit }, value: number) => {
      
      return commit('SET_SQUARE_LASTEST_SCROLL_TOP', value)
    },
    set_homepage_bot_tab: ({ commit }, value: number) => {
      return commit('SET_HOMEPAGE_BOT_TAB', value)
    }
  },
  getters: {
    square_current_tab       : state => state.square_current_tab,
    square_lastest_scroll_top: state => state.square_lastest_scroll_top,
    homepage_bot_tab         : state => state.homepage_bot_tab,
  }

}

const scrollSquare = (_state) => {
  return setTimeout(() => {
    Taro.pageScrollTo({
      scrollTop: _state.square_lastest_scroll_top[_state.square_current_tab],
      duration: 0
    })
  }, 0);
}


export default homepage