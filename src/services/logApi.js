import axios from 'axios'

const API_URL = 'http://localhost:8080/api' 

const logQuery = (keyword) =>
axios
  .post(`${API_URL}/add-query`, {
    query: keyword
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })

const logVideo = (id) =>
axios
  .post(`${API_URL}/add-video`, {
    videoId: id
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.error(error)
})

export default {
    logQuery,
    logVideo
}