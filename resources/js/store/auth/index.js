import mutations from './mutation'
import actions from './action'
import getters from './getter'

const defaultState = {
  token: null,
  errors: {
      login: [],
      register: []
  },
  userId: null,
  isAuthenticated: false,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
