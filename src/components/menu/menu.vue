<template lang="pug" src="./menu.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    links: ['home', 'welcome', 'the team', 'technology', 'testimonials', 'why us', 'contact']
  }),
  methods: {
    handleRoute (route) {
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
    }
  }
}
</script>
