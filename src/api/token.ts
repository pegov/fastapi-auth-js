import type { AxiosInstance } from "axios"

import type IApi from "../types/token"

const getApi = (axios: AxiosInstance, prefix: string): IApi => {
  const refreshAccessTokenUrl = prefix + "/token/refresh"
  return {
    url: {
      refreshAccessToken: refreshAccessTokenUrl,
    },
    payload: async () => {
      const { data } = await axios.post(`${prefix}/token`)
      return data
    },
    refreshAccessToken: async () => {
      const { data } = await axios.post(refreshAccessTokenUrl)
      return data
    }
  }
}

export default getApi