const homepage = {
  state: {
    homepage_current_tab: 0,
  },
  mutations: {
    SET_HOMEPAGE_CURRENT_TAB: (state, homepage_current_tab) => {
      state.homepage_current_tab = homepage_current_tab
    }
  }
}

export default homepage