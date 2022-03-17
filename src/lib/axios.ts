import axios from 'axios'
import { baseURL } from './contants'

export const apiGateway = axios.create({
   baseURL,
})
