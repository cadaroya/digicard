import Api from './Api'

export default {
     report(credentials) {
          return Api().post('report', credentials)
     }
}