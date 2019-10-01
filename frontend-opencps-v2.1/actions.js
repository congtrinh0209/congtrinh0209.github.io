import { API } from '@/config'

export default {

  /** GET ES */
  graphqlQuery({ state }, payload) {
    return new Promise((resolve, reject) => {
      let varia = payload.variables;
      varia['token'] = localStorage.getItem('token');
      window.Vue.$axios.post(API.vuejx, {
        query: payload.query,
        variables: JSON.stringify(varia)
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  /** GET DB */
  userById({ state }, payload) {
    var query = `query add($token: String, $db: String, $collection: String, $id: String, $keys: JSON) {
      userById: userById(token: $token, db: $db, collection: $collection, id: $id, keys: $keys)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          id: payload.id,
          keys: payload.keys
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userById)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userByIds({ state }, payload) {
    var query = `query add($token: String, $db: String, $collection: String, $ids: JSON, $limit: Int, $sort: JSON, $keys: JSON) {
      userByIds: userByIds(token: $token, db: $db, collection: $collection, ids: $ids, limit: $limit, sort: $sort, keys: $keys)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          ids: payload.ids,
          limit: payload.limit,
          sort: payload.sort,
          keys: payload.keys
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userByIds)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userOne({ state }, payload) {
    var query = `query add($token: String, $db: String, $collection: String, $filter: JSON, $skip: Int, $sort: JSON, $keys: JSON) {
      userOne: userOne(token: $token, db: $db, collection: $collection, filter: $filter, skip: $skip, sort: $sort, keys: $keys)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          filter: payload.filter,
          skip: payload.skip,
          sort: payload.sort,
          keys: payload.keys
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userOne)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userMany({ state }, payload) {
    var query = `query add($token: String, $db: String, $collection: String, $filter: JSON, $skip: Int, $limit: Int, $sort: JSON, $keys: JSON) {
      userMany: userMany(token: $token, db: $db, collection: $collection, filter: $filter, skip: $skip, limit: $limit, sort: $sort, keys: $keys)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          filter: payload.filter,
          skip: payload.skip,
          limit: payload.limit,
          sort: payload.sort,
          keys: payload.keys
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userMany)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userPagination({ state }, payload) {
    var query = `query add($token: String, $db: String, $collection: String, $filter: JSON, $sort: JSON, $keys: JSON, $page: Int, $perPage: Int) {
      userPagination: userPagination(token: $token, db: $db, collection: $collection, filter: $filter, sort: $sort, keys: $keys, page: $page, perPage: $perPage)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          filter: payload.filter,
          sort: payload.sort,
          keys: payload.keys,
          page: payload.page,
          perPage: payload.perPage
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userPagination)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userTotal({ state }, payload) {
    var query = `query add($token: String, $db: String, $collection: String, $filter: JSON) {
      userTotal: userTotal(token: $token, db: $db, collection: $collection, filter: $filter)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          filter: payload.filter
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userTotal)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userDb({ state }, payload) {
    var query = `query add($token: String) {
      userDb: userDb(token: $token)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token')
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userDb)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userCollection({ state }, payload) {
    var query = `query add($token: String, $db: String) {
      userCollection: userCollection(token: $token, db: $db)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userCollection)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },




  /** CRUD */
  userCreate({ state }, payload) {
    var query = `mutation add($token: String, $db: String, $collection: String, $body: JSON) {
      userCreate: userCreate(token: $token, db: $db, collection: $collection, body: $body)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          body: payload.body
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userCreate)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userCreateMany({ state }, payload) {
    var query = `mutation add($token: String, $db: String, $collection: String, $body: JSON) {
      userCreateMany: userCreateMany(token: $token, db: $db, collection: $collection, body: $body)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          body: payload.body
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userCreateMany)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userUpdateById({ state }, payload) {
    var query = `mutation add($token: String, $db: String, $collection: String, $body: JSON) {
      userUpdateById: userUpdateById(token: $token, db: $db, collection: $collection, body: $body)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          body: payload.body
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userUpdateById)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userUpdateOne({ state }, payload) {
    var query = `mutation add($token: String, $db: String, $collection: String, $body: JSON, $filter: JSON, $sort: JSON, $skip: Int) {
      userUpdateOne: userUpdateOne(token: $token, db: $db, collection: $collection, body: $body, filter: $filter, sort: $sort, skip: $skip)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          body: payload.body,
          filter: payload.filter,
          sort: payload.sort,
          skip: payload.skip
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userUpdateOne)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userUpdateMany({ state }, payload) {
    var query = `mutation add($token: String, $db: String, $collection: String, $body: JSON, $filter: JSON, $sort: JSON, $skip: Int, $limit: Int) {
      userUpdateMany: userUpdateMany(token: $token, db: $db, collection: $collection, body: $body, filter: $filter, sort: $sort, skip: $skip, limit: $limit)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          body: payload.body,
          filter: payload.filter,
          sort: payload.sort,
          skip: payload.skip,
          limit: payload.limit
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userUpdateMany)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userRemoveById({ state }, payload) {
    var query = `mutation add($token: String, $db: String, $collection: String, $id: String) {
      userRemoveById: userRemoveById(token: $token, db: $db, collection: $collection, id: $id)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          id: payload.id
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userRemoveById)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userRemoveOne({ state }, payload) {
    var query = `mutation add($token: String, $db: String, $collection: String, $filter: JSON, $sort: JSON) {
      userRemoveOne: userRemoveOne(token: $token, db: $db, collection: $collection, filter: $filter, sort: $sort)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          filter: payload.filter,
          sort: payload.sort
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userRemoveOne)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  userRemoveMany({ state }, payload) {
    var query = `mutation add($token: String, $db: String, $collection: String, $filter: JSON) {
      userRemoveMany: userRemoveMany(token: $token, db: $db, collection: $collection, filter: $filter)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          filter: payload.filter
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response.data.data.userRemoveMany)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  },
  reindex({ state }, payload) {
    var query = `mutation add($token: String, $db: String, $collection: String, $from: String, $until: String, $type: String, $all: String) {
      reindex: reindex(token: $token, db: $db, collection: $collection, from: $from, until: $until, type: $type, all: $all)
    }`
    return new Promise((resolve, reject) => {
      window.Vue.$axios.post(API.vuejx, {
        query: query,
        variables: JSON.stringify({
          token: localStorage.getItem('token'),
          db: payload.db,
          collection: payload.collection,
          from: payload.from,
          until: payload.until,
          type: String(payload.type),
          all: payload.all,
        })
      }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          reject(null)
        })
    })
  }
}
