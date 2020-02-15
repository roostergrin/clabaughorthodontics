<template lang="pug" src="./custom-care-faq.pug" ></template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    windowWidth: window.innerWidth,
    answerHeight: '',
    show: 0
  }),
  mounted () {
    this.answerHeight = this.$refs.answer[this.show].clientHeight
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      setTimeout(() => {
        if (this.show !== null) {
          this.answerHeight = this.$refs.answer[this.show].clientHeight
        }
      }, 500)
    },
    toggleAccordion (i) {
      this.show === i ? this.show = null : this.show = i
      if (this.show !== null) {
        this.answerHeight = this.$refs.answer[i].clientHeight
      } else {
        this.answerHeight = 0
      }
    }
  }
}
</script>
