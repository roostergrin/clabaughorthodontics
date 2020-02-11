<template lang="pug" src="./custom-home-testimonials.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    currIndex: 0,
    maxHeight: 0,
    windowWidth: window.innerWidth
  }),
  mounted () {
    this.getHeight()
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.windowWidth = window.innerWidth
        this.getHeight()
      }, 250)
    })
  },
  methods: {
    getHeight () {
      const newArr = []
      this.$refs.testimonial.map((el) => {
        newArr.push(el.clientHeight)
      })
      this.maxHeight = Math.max(...newArr)
    },
    changeSlide (str) {
      if (str === 'prev') {
        this.currIndex === 0 ? this.currIndex = this.props.testimonials.length - 1 : this.currIndex--
      }
      if (str === 'next') {
        this.currIndex === (this.props.testimonials.length - 1) ? this.currIndex = 0 : this.currIndex++
      }
    },
    moveDown () {
      this.$store.dispatch('ACTIVE_INDEX', this.$store.state.currIndex + 1)
    }
  }
}
</script>
