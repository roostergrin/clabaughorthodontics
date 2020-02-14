<template lang="pug" src="./home-care.pug" ></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'
import TheFooter from 'components/footer/footer'

export default {
  components: {
    HeroPages,
    TheFooter
  },
  computed: {
    props () {
      return this.$store.state.pages['home-care']
    }
  }
}
</script>
