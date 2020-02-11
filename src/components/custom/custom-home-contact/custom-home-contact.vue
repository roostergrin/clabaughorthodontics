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
  computed: {
    content () {
      return this.$store.state.app.global
    }
  }
}
</script>
