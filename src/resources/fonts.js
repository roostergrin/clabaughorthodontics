/* eslint-disable */

// ----------------------------
// to learn more about importing => https://github.com/typekit/webfontloader
// ----------------------------

var WebFont = require('webfontloader')

const fonts = () => {
  WebFont.load({
    google: {
      families: [ 'Raleway:400,500,600,700' ]
    }
  }),
  WebFont.load({
    typekit: { id: 'wte6ybz'}
  })
}

export default fonts()
/* eslint-enable */
