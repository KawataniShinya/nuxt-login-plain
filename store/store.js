import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  registeredUser: {
      email: 'test@mail.com',
      password: 'password'
  }
}

const actions = {
  authenticate({commit}, payload) {
    if(payload.email === state.registeredUser.email && payload.password === state.registeredUser.password) {
      return true;
    } else {
      return false;
    }
  }
}

const store = new Vuex.Store({
  state,
  actions
});

export default store
