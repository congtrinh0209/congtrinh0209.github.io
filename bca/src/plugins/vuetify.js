import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components: {
    VDataTable
  },
  // directives,
  icons: {
    defaultSet: 'mdi'
  }
})
import '../assets/main.scss'
import '../assets/overrides.scss'

export default vuetify