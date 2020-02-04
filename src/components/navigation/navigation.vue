<template lang="pug" src="./navigation.pug"></template>

<script>
import NavigationDesktop from 'components/navigation/navigation-desktop/navigation-desktop'

export default {
  computed: {
    links () {
      return this.$router.options.routes.filter((link) => {
        return link.navigation
      })
    },
    props () {
      return this.$store.state.app.global
    }
  },
  components: {
    NavigationDesktop
  }
}
</script>
