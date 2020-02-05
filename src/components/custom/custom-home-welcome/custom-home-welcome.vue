<template lang="pug" src="./custom-home-welcome.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    videoPlaying: false
  }),
  methods: {
    playVideo () {
      this.videoPlaying = true
      setTimeout(() => {
        this.$refs.video.play()
      }, 250)
    },
    moveDown () {
      this.$store.dispatch('ACTIVE_INDEX', this.$store.state.currIndex + 1)
    }
  }
}
</script>
