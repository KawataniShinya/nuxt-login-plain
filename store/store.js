import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  registeredUser: {
      email: 'test@mail.com',
      password: 'password'
  }
}

export default new Vuex.Store({
  state
})
