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
    this.handleTouch((swipedir) => {
      if (this.$store.state.isMobile) {
        if (swipedir === 'left') {
          this.changeSlide('next')
        }
        if (swipedir === 'right') {
          this.changeSlide('prev')
        }
      }
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
    },
    handleTouch (callback) {
      var swipedir
      var startX
      var startY
      var distX
      var distY
      var threshold = 20 // min dist for swipe
      var restraint = 5 // max dist allow allowed at the same time in perpendicular direction
      var allowedTime = 300 // max time allowed to travel dist
      var elapsedTime
      var startTime
      var handleSwipe = callback || function (swipedir) {}

      this.$refs.testimonials.addEventListener('touchstart', (e) => {
        let touchObj = e.changedTouches[0]
        swipedir = 'none'
        startX = touchObj.pageX
        startY = touchObj.pageY
        startTime = new Date().getTime()
      })

      this.$refs.testimonials.addEventListener('touchend', (e) => {
        let touchObj = e.changedTouches[0]
        distX = touchObj.pageX - startX
        distY = touchObj.pageY - startY
        elapsedTime = new Date().getTime() - startTime
        if (elapsedTime <= allowedTime) {

        }
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          swipedir = (distX < 0) ? 'left' : 'right'
        } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
          swipedir = (distY < 0) ? 'up' : 'down'
        }
        return handleSwipe(swipedir)
      })
    }
  }
}
</script>
