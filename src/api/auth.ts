import type { AxiosInstance } from "axios"

import type IApi from "../types/auth"

const getApi = (axios: AxiosInstance, prefix: string): IApi => {
  const loginUrl = prefix + "/login"
  return {
    url: {
      login: loginUrl,
    },
    register: async payload => {
      await axios.post(`${prefix}/register`, payload)
    },
    login: async payload => {
      await axios.post(loginUrl, payload)
    },
    logout: async () => {
      await axios.post(`${prefix}/logout`)
    },
  }
}

export default getApi