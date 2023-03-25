import axios from 'axios'
const clienteAxios = axios.create({
  baseURL: 'https://productlist-production.up.railway.app/',
})

export default clienteAxios
