import axios, { AxiosRequestConfig } from 'axios';

const Axios = axios.create({ timeout: 30000 });

const API = async (configs: AxiosRequestConfig<any>) => {
  const { method, url, data, timeout, headers } = configs;

  try{
    const res = await Axios({
      method,
      url,
      data,
      timeout,
      headers,
    });

    return {
      status: res.status,
      error: '',
      data: res.data
    }

  }catch(err){

    return{
      status: null,
      error: err.response,
      data: '',
    }
  }
}

export default API;