import type { AxiosInstance } from "axios"

import type IApi from "../types/me"

const getApi = (axios: AxiosInstance, prefix: string): IApi => {
  return {
    get: async () => {
      const { data } = await axios.get(`${prefix}/me`)
      return data
    },
    changeUsername: async payload => {
      await axios.post(`${prefix}/me/change_username`, payload)
    },
    addOAuthAccount: async provider => {
      await axios.post(`${prefix}/me/oauth/add_account/${provider}`)
    },
    requestOAuthAccountRemoval: async () => {
      await axios.post(`${prefix}/me/oauth/request_account_removal`)
    },
    removeOAuthAccount: async token => {
      await axios.post(`${prefix}/me/oauth/remove_account/${token}`)
    },
  }
}

export default getApi