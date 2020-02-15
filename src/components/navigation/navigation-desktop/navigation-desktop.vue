<template lang="pug" src="./navigation-desktop.pug"></template>

<script>
export default {
  props: {
    links: {
      type: Array
    },
    props: {
      type: Object
    }
  },
  data: () => ({
    dropdownActive: false
  }),
  methods: {
    toggleDrawer () {
      if (this.$store.state.drawer) {
        this.$store.dispatch('SET_DRAWER', false)
      } else {
        this.$store.dispatch('SET_DRAWER', true)
      }
    },
    handleDropdown () {
      this.dropdownActive = !this.dropdownActive
    },
    handleRoute (route) {
      this.$store.dispatch('ACTIVE_INDEX', route)
    }
  }
}
</script>
