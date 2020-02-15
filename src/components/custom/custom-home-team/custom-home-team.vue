<template lang="pug" src="./custom-home-team.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    currIndex: 3,
    maxHeight: '',
    windowWidth: window.innerWidth
  }),
  mounted () {
    this.getHeight()
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.windowWidth = window.innerWidth
        this.getHeight()
      }, 500)
    })
  },
  methods: {
    getHeight () {
      const newArr = []
      this.$refs.bio.map((el) => {
        newArr.push(el.clientHeight)
      })
      this.maxHeight = Math.max(...newArr)
    },
    handleHover (i) {
      this.currIndex = i
    },
    moveDown () {
      this.$store.dispatch('ACTIVE_INDEX', this.$store.state.currIndex + 1)
    }
  }
}
</script>
