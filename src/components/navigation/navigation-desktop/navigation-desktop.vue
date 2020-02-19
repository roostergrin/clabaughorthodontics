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
    dropdownActive: false,
    windowHeight: window.pageYOffset
  }),
  computed: {
    scrolling () {
      if (this.$route.path !== '/') {
        return this.windowHeight > (window.innerHeight * 0.85)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.windowHeight = window.pageYOffset
    })
  },
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
      if (this.$route.path !== '/') {
        this.$router.push('/')
        setTimeout(() => {
          this.$store.dispatch('ACTIVE_INDEX', route)
        }, 350)
      } else {
        this.$store.dispatch('ACTIVE_INDEX', route)
      }
    }
  }
}
</script>
