import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { AxiosRequestConfig } from "axios";
import API from 'Utils/API';
import { HookAPIRes } from "./types";


const useApi = (defaults: AxiosRequestConfig = { method: 'GET', url: '', headers: {}, data: {} } ): 
[HookAPIRes, Dispatch<SetStateAction<HookAPIRes>>] => {
  const [state, setState] = useState<HookAPIRes>({ error: false, data: null, loading: false });
  // Using an ASYNC function for API because we need to await for response and not the promise itself to be returned
  useEffect(() => {
      // Starting the Request
      setState({ error: false, data: null, loading: true });
      // Handle Request
      (async () => {
        const { method, url, headers, data } = defaults;
          const res = await API({ method, url, headers, data });
          if(res.error){
              // Error
              setState({ error: res.error, data: null, loading: true });
              return;
          }else{
              // Success
              setState({ error: false, data: res.data, loading: false });
          }
      })();
  }, []);
  return [state, setState];
}

export default useApi;