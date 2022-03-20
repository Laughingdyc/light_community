import { createStore } from 'vuex'
import homepage_store from './modules/Homepage'
import getters from './getters'
import actions from './actions'


const store = createStore({
  modules: {
    homepage_store
  },
  actions,
  getters
})

export default store
