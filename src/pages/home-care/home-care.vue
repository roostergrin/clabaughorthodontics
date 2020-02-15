<template lang="pug" src="./home-care.pug" ></template>

<script>
import FaqSection from 'custom/custom-care-faq/custom-care-faq'
import HeroPages from 'components/hero/hero-pages/hero-pages'
import TheFooter from 'components/footer/footer'

export default {
  components: {
    FaqSection,
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
