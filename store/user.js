export const state = () => ({
  information: null
})


export const mutations = {
  signUp (state, userInfo) {
    state.information = userInfo
    console.log(state.information)
  }
}
