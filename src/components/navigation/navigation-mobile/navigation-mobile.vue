<template lang="pug" src="./navigation-mobile.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    },
    links: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    toggleDrawer () {
      if (this.$store.state.drawer) {
        this.$store.dispatch('SET_DRAWER', false)
      } else {
        this.$store.dispatch('SET_DRAWER', true)
      }
    }
  }
}
</script>
