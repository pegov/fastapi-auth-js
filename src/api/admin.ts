import type { AxiosInstance } from "axios"

import type IApi from "../types/admin"

const getApi = (axios: AxiosInstance, prefix: string): IApi => {
  return {
    getMassLogoutStatus: async () => {
      const { data } = await axios.get(`${prefix}/mass_logout`)
      return data
    },
    activateMassLogout: async () => {
      await axios.post(`${prefix}/mass_logout`)
    },
    deactivateMassLogout: async () => {
      await axios.delete(`${prefix}/mass_logout`)
    },

    ban: async id => {
      await axios.post(`${prefix}/${id}/ban`)
    },
    unban: async id => {
      await axios.post(`${prefix}/${id}/unban`)
    },

    kick: async id => {
      await axios.post(`${prefix}/${id}/kick`)
    },
    unkick: async id => {
      await axios.post(`${prefix}/${id}/unkick`)
    },
  }
}

export default getApi