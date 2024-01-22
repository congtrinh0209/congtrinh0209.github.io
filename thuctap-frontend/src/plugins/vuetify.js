import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  components: {
  },
  // directives,
  icons: {
    defaultSet: 'mdi'
  }
})

export default vuetify