import axios from 'axios'

// 在数据请求回来以后，将结果处理后再将结果返回


axios.interceptors.response.use( res => res.data, error => Promise.reject(error) )


export default axios