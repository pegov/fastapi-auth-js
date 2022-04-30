import type { AxiosInstance } from "axios"

import type IApi from "../types/email"

const getApi = (axios: AxiosInstance, prefix: string): IApi => {
  return {
    requestVerification: async () => {
      await axios.post(`${prefix}/verify`)
    },
    verify: async token => {
      await axios.post(`${prefix}/verify/${token}`)
    },
    requestEmailChange: async payload => {
      await axios.post(`${prefix}/change`, payload)
    },
    verifyOld: async token => {
      await axios.post(`${prefix}/change/old/${token}`)
    },
    verifyNew: async token => {
      await axios.post(`${prefix}/change/new/${token}`)
    },
  }
}

export default getApi