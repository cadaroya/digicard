import Api from './Api'

export default {
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
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
    return Api().put(`student/${student.sno}`, song)
  }
}

