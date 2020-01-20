import {
  GET_APP,
  GET_PAGES,
  // GET_BLOG,
  // SET_BLOG,
  SET_SCROLLED,
  IS_MOBILE,
  ACTIVE_INDEX,
  SET_DRAWER,
  LOADING
} from './mutation-types.js'

const mutations = {
  [GET_APP] (state, data) {
    state.app = data
  },
  // [GET_BLOG] (state, data) {
  //   state.blog = data
  //   state.blog.current_page = {}
  //   state.blog.current_page.number = 1
  // },
  // [SET_BLOG] (state, data) {
  //   state.sortedBlog = data
  // },
  [GET_PAGES] (state, data) {
    state.pages = data
    // state.loading = false
  },
  [SET_SCROLLED] (state, data) {
    state.scrolled = data
  },
  [IS_MOBILE] (state, data) {
    state.isMobile = data
  },
  [ACTIVE_INDEX] (state, data) {
    state.currIndex = data
  },
  [SET_DRAWER] (state, data) {
    state.drawer = data
  },
  [LOADING] (state, data) {
    state.loading = data
  }
}

export default mutations
