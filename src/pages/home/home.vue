<template lang="pug" src="./home.pug"></template>

<script>
import TheFooter from 'components/footer/footer'
import HomeHero from 'components/hero/hero-home/hero-home'

import config from '@/config'

export default {
  components: {
    HomeHero,
    TheFooter
  },
  data () {
    return {
      fullpageOptions: {
        licenseKey: config.fullpage.KEY, // add config file manually to server: DO NOT push key to github
        onLeave: this.handleIndex,
        easeingcss3: 'cubic-bezier(.52, .01, .16, 1)',
        responsiveHeight: 600,
        responsiveWidth: 881,
        scrollingSpeed: 550
      }
    }
  },
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  methods: {
    handleIndex (origin, destination, direction) {
      setTimeout(() => { this.$store.dispatch('ACTIVE_INDEX', destination.index) }, 400)
    }
  }
}
</script>
