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
  data: () => ({
    windowHeight: window.pageYOffset
  }),
  computed: {
    scrolling () {
      return this.windowHeight > (window.innerHeight * 0.35)
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
    }
  }
}
</script>
