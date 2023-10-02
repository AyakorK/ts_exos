
import axios from 'axios'

export function getUserSummary(id: number) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      const { data } = res
      return `${data.name} (${data.username}) - ${data.email}`
    }).catch(err => {
      throw new Error(err)
    })
}
