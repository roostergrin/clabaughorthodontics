<template lang="pug" src="./hero-home.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    moveDown () {
      this.$store.dispatch('ACTIVE_INDEX', this.$store.state.currIndex + 1)
    }
  }
}
</script>
