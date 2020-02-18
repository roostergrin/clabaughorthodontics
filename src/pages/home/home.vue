<template lang="pug" src="./home.pug"></template>

<script>
import ContactSection from 'custom/custom-home-contact/custom-home-contact'
import HomeHero from 'components/hero/hero-home/hero-home'
import TeamSection from 'custom/custom-home-team/custom-home-team'
import TechnologySection from 'custom/custom-home-technology/custom-home-technology'
import TestimonialsSection from 'custom/custom-home-testimonials/custom-home-testimonials'
import TheFooter from 'components/footer/footer'
import WelcomeSection from 'custom/custom-home-welcome/custom-home-welcome'
import WhySection from 'custom/custom-home-why/custom-home-why'

import config from '@/config'

export default {
  components: {
    ContactSection,
    HomeHero,
    TeamSection,
    TechnologySection,
    TestimonialsSection,
    TheFooter,
    WelcomeSection,
    WhySection
  },
  data () {
    return {
      fullpageOptions: {
        licenseKey: config.fullpage.KEY, // add config file manually to server: DO NOT push key to github
        onLeave: this.handleIndex,
        easeingcss3: 'cubic-bezier(.52, .01, .16, 1)',
        responsiveWidth: 880,
        scrollingSpeed: 550
      }
    }
  },
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    currEl () {
      return this.$store.state.currIndex
    }
  },
  watch: {
    'currEl': function () {
      let num = this.currEl + 1
      if (!this.$store.state.mobile && this.$el.clientWidth >= 880) {
        this.$refs.home.api.moveTo(num)
      }
    }
  },
  methods: {
    handleIndex (origin, destination, direction) {
      setTimeout(() => { this.$store.dispatch('ACTIVE_INDEX', destination.index) }, 400)
    }
  }
}
</script>
