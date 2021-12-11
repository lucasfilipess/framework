import axios, { AxiosResponse } from 'axios'
export type ResponseProps = AxiosResponse

const Api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  baseURL: process.env.REACT_APP_API_URL
})

export default Api
