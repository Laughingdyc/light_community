const homepage = {
  state: {
    homepage_current_tab: 0,   // tab组件的当前值
    homepage_bot_tab: 0,   // botTab组件的当前值
  },
  mutations: {
    SET_HOMEPAGE_CURRENT_TAB: (state, homepage_current_tab) => {
      state.homepage_current_tab = homepage_current_tab
    },
    SET_HOMEPAGE_BOT_TAB: (state, homepage_bot_tab) => {
      state.homepage_bot_tab = homepage_bot_tab
    }
  },
  actions: {
    set_homepage_current_tab: ({ commit }, homepage_current_tab) => {
      return commit('SET_HOMEPAGE_CURRENT_TAB', homepage_current_tab)
    },
    set_homepage_bot_tab: ({ commit }, homepage_bot_tab) => {
      return commit('SET_HOMEPAGE_BOT_TAB', homepage_bot_tab)
    }
  },
  getters: {
    homepage_current_tab: state => state.homepage_current_tab,
    homepage_bot_tab: state => state.homepage_bot_tab,
  }

}

export default homepage