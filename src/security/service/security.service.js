import { http } from '../../shared/config/http.config'

export class SecurityApiService {
  signIn(data) {
    return http.post('/user/sign-in', data)
  }

  signUp(data) {
    return http.post('/user/sign-up', data)
  }
}
