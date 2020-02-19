<template lang="pug" src="./form-contact.pug"></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      fullName: '',
      clientEmail: '',
      clientPhone: '',
      isFirstTime: false,
      firstTimeMessage: 'No, I am not a first time patient',
      clientMessage: '',
      postUrl: api + '/rg-mail/v1/contact',
      formSubmitted: false,
      formSuccess: false,
      modalOpen: false
    }
  },
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.onSubmit()
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    closeModal () {
      this.formSuccess = false
      this.formSubmitted = false
      setTimeout(() => {
        this.modalOpen = false
        this.isFirstTime = false
      }, 150)
    },
    onSubmit () {
      this.formSubmitted = true
      console.log(this.isFirstTime)
      if (this.isFirstTime) {
        this.firstTimeMessage = 'Yes, I am a first time patient'
      }
      axios.post(this.postUrl, {
        fullName: this.fullName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        firstTime: this.firstTimeMessage,
        clientMessage: this.clientMessage
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            this.modalOpen = true
          }, 750)
          setTimeout(() => {
            this.fullName = ''
            this.clientEmail = ''
            this.clientPhone = ''
            this.clientMessage = ''
          }, 1000)
          setTimeout(() => {
            this.errors.clear()
          }, 1100)
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    }
  }
}
</script>
