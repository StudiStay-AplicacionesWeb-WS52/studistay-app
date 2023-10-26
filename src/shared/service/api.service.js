import axios from 'axios'

const http = axios.create({
  baseURL: 'https://studistay.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export class StudiStayApiService {
  getAllPosts() {
    return http.get('/post')
  }

  getPostById(id) {
    return http.get(`/post/${id}`)
  }

  createPost(data) {
    return http.post('/post', data)
  }

  deletePost(id) {
    return http.delete(`/post/${id}`)
  }

  getAllUniversities() {
    return http.get('/university')
  }

  createReservation(data) {
    return http.post('/reservation', data)
  }
}
