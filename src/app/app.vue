<template lang="pug" src="./app.pug"></template>

<script>
import TheNavigation from 'components/navigation/navigation'

export default {
  async created () {
    this.$store.dispatch('GET_APP')
    // this.$store.dispatch('GET_BLOG')
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('SET_SCROLLED', false)
    this.$store.dispatch('SET_DRAWER', false)
    this.$store.dispatch('ACTIVE_INDEX', 0)
  },
  mounted () {
    if ((typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
      this.$store.dispatch('IS_MOBILE', true)
    }
  },
  components: {
    TheNavigation
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
