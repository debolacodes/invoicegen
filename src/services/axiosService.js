import axios from 'axios';
import SessionService from './sessionService';

//stated the initial configuration for the errrand
const configuration = {
    baseURL : import.meta.env.VITE_API_BASEURL,
    headers: {
        'Content-Type':'application/json'
    }
}

//create an instance of an errand using initial configuration
const instance = axios.create(configuration)


//intercepting the errand (check for user token and add it to the errand (if available))
instance.interceptors.request.use((config) => {
    const token = SessionService.getAccessToken();
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})




// Response Interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear session
      SessionService.clearTokens();
      // Optional: redirect to login
      window.location.href = '/';

      // Optional: If you're using Redux, dispatch logout from here
      // store.dispatch(logout());
    }

    return Promise.reject(error);
  })


export default instance