interface OAuth {
	provider: string
	sid: string
}

export interface IMe {
	id: number
	email: string
	username: string
	roles: string[]

	oauth?: OAuth

	verified: boolean
}

export interface IChangeUsername {
	username: string
}

export default interface IApi {
	get: () => Promise<IMe>
	changeUsername: (payload: IChangeUsername) => Promise<void>
	addOAuthAccount: (providerName: string) => Promise<void>
	requestOAuthAccountRemoval: () => Promise<void>
	removeOAuthAccount: (token: string) => Promise<void>
}