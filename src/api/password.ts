import type { AxiosInstance } from "axios"

import type IApi from "../types/password"

const getApi = (axios: AxiosInstance, prefix: string): IApi => {
  return {
    forgotPassword: async payload => {
      await axios.post(`${prefix}/password/forgot`, payload)
    },
    getPasswordStatus: async () => {
      const { data } = await axios.get(`${prefix}/password/status`)
      return data
    },
    setPassword: async payload => {
      await axios.post(`${prefix}/password/set`, payload)
    },
    changePassword: async payload => {
      await axios.post(`${prefix}/password/change`, payload)
    },
    resetPassword: async payload => {
      await axios.post(`${prefix}/password/reset`, payload)
    },
  }
}

export default getApi