import type from './type'
import JwtService from '@/common/jwt.service'

const mutations = {
  [type.SET_ALL_USERS] (state, data) {
    state.users = data.users;
  },
  [type.SET_USER] (state, data) {
    state.user = data.user;
  },
  [type.SET_ALL_COURSES] (state, data) {
    state.courses = data.courses;
  },
};
export default mutations;