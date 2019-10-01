const Vue = window.Vue
import axios from 'axios'
import toastr from 'toastr'

toastr.options = {
  'closeButton': true,
  'timeOut': '1500'
}

Vue.use(toastr)

export default class Service {

  pullDataSource (api, payload) {
    return new Promise((resolve, reject) => {
      axios.post(api, {
        query: payload.query,
        variables: JSON.stringify({
          token: payload.user['token']
        })
      })
      .then(response => {
        if (response.data.data.search !== null) {
          resolve(response.data.data.search.hits.hits)
        } else {
          resolve([])
        }
      })
      .catch(error => {
        console.log(error)
        toastr.error(error)
        reject(null)
      })
    })
  }

}