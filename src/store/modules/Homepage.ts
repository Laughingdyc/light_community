const homepage = {
  state: {
    square_current_tab: 0,   // 广场tab组件的当前值
    mine_current_tab  : 0,   // 个人中心tab组件的当前值
    homepage_bot_tab  : 0,   // botTab组件的当前值
  },
  /**
   * 不建议直接调用 mutations!, 请用 actions 来完成赋值逻辑
   */
  mutations: {
    SET_SQUARE_CURRENT_TAB: (state, value) => {
      state.square_current_tab = value
    },
    SET_MINE_CURRENT_TAB: (state, value) => {
      state.mine_current_tab = value
    },
    SET_HOMEPAGE_BOT_TAB: (state, value) => {
      state.homepage_bot_tab = value
    },
  },
  actions: {
    set_square_current_tab: ({ commit }, value: number) => {
      return commit('SET_SQUARE_CURRENT_TAB', value)
    },
    set_mine_current_tab: ({ commit }, value: number) => {
      return commit('SET_MINE_CURRENT_TAB', value)
    },
    set_homepage_bot_tab: ({ commit }, value: number) => {
      return commit('SET_HOMEPAGE_BOT_TAB', value)
    }
  },
  getters: {
    square_current_tab: state => state.square_current_tab,
    mine_current_tab  : state => state.mine_current_tab,
    homepage_bot_tab  : state => state.homepage_bot_tab,
  }

}



export default homepage