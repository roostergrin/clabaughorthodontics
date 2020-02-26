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
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  }),
  mounted () {
    if (this.windowWidth >= 880) {
      this.getHeight()
    }
    if (this.windowWidth < 880) {
      this.mobileHeight()
    }
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.windowWidth = window.innerWidth
        this.windowHeight = window.innerHeight
        if (this.windowWidth >= 880) {
          this.getHeight()
        }
        if (this.windowWidth < 880) {
          this.mobileHeight()
        }
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
    mobileHeight () {
      this.maxHeight = this.$refs.bio[this.currIndex].clientHeight
    },
    handleHover (i) {
      this.currIndex = i
      if (this.windowWidth < 880) {
        this.maxHeight = this.$refs.bio[this.currIndex].clientHeight
      }
    },
    moveDown () {
      this.$store.dispatch('ACTIVE_INDEX', this.$store.state.currIndex + 1)
    }
  }
}
</script>
