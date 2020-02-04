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
        document.body.classList.remove('body-stop')
      } else {
        this.$store.dispatch('SET_DRAWER', true)
        document.body.classList.add('body-stop')
      }
    },
    handleDropdown () {
      this.dropdownActive = !this.dropdownActive
    }
  }
}
</script>
