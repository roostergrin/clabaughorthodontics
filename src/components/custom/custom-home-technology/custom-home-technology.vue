<template lang="pug" src="./custom-home-technology.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    currentSlide: 0,
    sliding: false,
    maxHeight: null
    // animate: null
  }),
  mounted () {
    const setHeight = setInterval(() => {
      if (this.$refs !== undefined) {
        this.getHeight()
        clearInterval(setHeight)
      }
    }, 100)
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.windowWidth = window.innerWidth
        this.getHeight()
      }, 500)
    })
    // this.animate = setInterval(() => {
    //   this.changeSlide('auto')
    // }, 5000)
  },
  methods: {
    getHeight () {
      const newArr = []
      this.$refs.content.map((el) => {
        newArr.push(el.clientHeight)
      })
      this.maxHeight = Math.max(...newArr)
    },
    changeSlide (str) {
      if (str === 'prev' && !this.sliding) {
        this.currentSlide === 0 ? this.currentSlide = this.props.list.length - 1 : this.currentSlide--
      }
      if (str === 'next' && !this.sliding) {
        this.currentSlide === (this.props.list.length - 1) ? this.currentSlide = 0 : this.currentSlide++
      }
      this.sliding = true
      setTimeout(() => {
        this.sliding = false
      }, 1000)
    },
    moveDown () {
      this.$store.dispatch('ACTIVE_INDEX', this.$store.state.currIndex + 1)
    }
  }
}
</script>
