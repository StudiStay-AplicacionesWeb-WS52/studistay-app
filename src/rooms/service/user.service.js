import { http } from '../../shared/config/http.config'

export class UserApiService {
    getUserById(id) {
      return http.get(`/user/${id}`)
    }

    updateUserById(id, data) {
      return http.put(`/user/${id}`, data)
    }

    deleteUserById(id) {
      return http.delete(`/user/${id}`)
    }
  }
  