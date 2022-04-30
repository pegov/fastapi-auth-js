import type { AxiosInstance } from "axios";

import type IApi from "./types";

const setupRefreshTokenInterceptor = (axios: AxiosInstance, api: IApi) => {
  axios.interceptors.response.use(response => {
    return response
  },
  error => {
    const originalRequest = error.config
    if (error.response.status === 401) {
      if (
        originalRequest.url === api.token.url.refreshAccessToken ||
        originalRequest.url === api.auth.url.login
      ) {
        return Promise.reject(error)
      }

      if (!originalRequest._retry) {
        originalRequest._retry = true
        return api.token.refreshAccessToken().then(() => {
          return axios(originalRequest)
        })
          .catch(error => {
            return Promise.reject(error)
          })
      }
    }
    return Promise.reject(error)
  })
}

export default setupRefreshTokenInterceptor