import type { AxiosInstance } from "axios"
import getAdminApi from "./admin"
import getAuthApi from "./auth"
import getEmailApi from "./email"
import getMeApi from "./me"
import getPasswordApi from "./password"
import getTokenApi from "./token"

import setupRefreshTokenInterceptor from "../interceptor"

export interface IConfig {
  prefix: string
  interceptor: boolean
}

const getApi = (axios: AxiosInstance, config: IConfig = {
  prefix: "/api/users",
  interceptor: true,
}) => {
  const api = {
    admin: getAdminApi(axios, config.prefix),
    auth: getAuthApi(axios, config.prefix),
    email: getEmailApi(axios, config.prefix),
    me: getMeApi(axios, config.prefix),
    password: getPasswordApi(axios, config.prefix),
    token: getTokenApi(axios, config.prefix),
  }

  if (config.interceptor) {
    setupRefreshTokenInterceptor(axios, api)
  }

  return api
}

export default getApi