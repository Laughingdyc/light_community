import { createStore } from 'vuex'
import homepage_store from './modules/Homepage'
import comments from './modules/Comments'


const store = createStore({
  modules: {
    homepage_store,
    comments
  }
})

export default store
