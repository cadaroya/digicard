import Api from './Api'

export default {
     index () {
          return Api().get('reports')
     },

     log () {
          return Api().get('reports')
     }
}
