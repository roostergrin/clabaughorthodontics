<template lang="pug" src="./custom-home-contact.pug" ></template>

<script>
import FormContact from 'components/form/form-contact/form-contact'

export default {
  components: {
    FormContact
  },
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    windowHeight: window.innerHeight
  }),
  mounted () {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.windowHeight = window.innerHeight
      }, 500)
    })
  },
  computed: {
    content () {
      return this.$store.state.app.global
    }
  }
}
</script>
