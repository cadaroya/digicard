/* eslint-disable */
import Api from '@/services/Api'

export default {
     timein (studNo) {
          return Api().post('timein', studNo)
     }
}