import { createStore } from 'vuex'
import homepage_store from './modules/Homepage'


const store = createStore({
  modules: {
    homepage_store
  }
})

export default store
