import Api from './Api'

export default {
     index (search, sno) {
          return Api().get(`student/${sno}`, {
               params: {
                    search: sno
               }
          })
     },
     show (sno) {
          return Api().get(`student/${sno}`)
     },
     post (student) {
          return Api().post('student', student)
     }
}

