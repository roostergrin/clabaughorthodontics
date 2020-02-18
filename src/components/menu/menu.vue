<template lang="pug" src="./menu.pug" ></template>

<script>
export default {
  data: () => ({
    links: ['home', 'welcome', 'the team', 'technology', 'testimonials', 'why us', 'contact'],
    windowWidth: window.innerWidth
  }),
  computed: {
    props () {
      return this.$store.state.app.global
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    handleRoute (route) {
      if (this.windowWidth >= 881) {
        if (this.$route.path !== '/') {
          this.$router.push('/')
          this.$store.dispatch('SET_DRAWER', false)
          setTimeout(() => {
            this.$store.dispatch('ACTIVE_INDEX', route)
          }, 300)
        } else {
          this.$store.dispatch('SET_DRAWER', false)
          setTimeout(() => {
            this.$store.dispatch('ACTIVE_INDEX', route)
          }, 300)
        }
      } else {
        if (this.$route.path !== '/') {
          this.$router.push('/')
          this.$store.dispatch('SET_DRAWER', false)
          setTimeout(() => {
            this.$scrollTo(`#section-${route}`)
          }, 400)
        } else {
          this.$store.dispatch('SET_DRAWER', false)
          setTimeout(() => {
            this.$scrollTo(`#section-${route}`)
          }, 300)
        }
      }
    },
    closeDrawer () {
      this.$store.dispatch('SET_DRAWER', false)
    }
  }
}
</script>
