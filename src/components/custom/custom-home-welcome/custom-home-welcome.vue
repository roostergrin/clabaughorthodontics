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
  mounted () {
    this.$refs.video.addEventListener('ended', () => {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen()
      }
    })
  },
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
