import axios from 'axios'

// 在数据请求回来以后，将结果处理后再将结果返回


axios.interceptors.response.use( res => res.data, error => Promise.reject(error) )


// 封装后的 axios 使用方式和 jq 的 ajax 类似
let ajax = (url,type,data) =>{
     
    type = type ? type : "get";

   return axios({
        url:url,
        method: type,
        data:data
    })
}

export default ajax