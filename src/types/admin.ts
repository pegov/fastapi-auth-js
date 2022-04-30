interface IMassLogoutActive {
	active: true
	date: string
}

interface IMassLogoutNotActive {
	active: false
}

export type IMassLogoutStatus =
	IMassLogoutActive
	| IMassLogoutNotActive


export default interface IApi {
	getMassLogoutStatus: () => Promise<IMassLogoutStatus>
	activateMassLogout: () => Promise<void>
	deactivateMassLogout: () => Promise<void>

	ban: (id: number) => Promise<void>
	unban: (id: number) => Promise<void>

	kick: (id: number) => Promise<void>
	unkick: (id: number) => Promise<void>
}