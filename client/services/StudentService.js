import Api from './Api'

export default {
  index (search, sno) {
    console.log("im still working")
    return Api().get(`student`, {
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
  },
  put (student) {
    return Api().put(`student/${student.sno}`, student)
  }
}

