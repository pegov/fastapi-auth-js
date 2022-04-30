export interface IRequestEmailChange {
	email: string
}

export default interface IApi {
	requestVerification: () => Promise<void>
	verify: (token: string) => Promise<void>
	requestEmailChange: (payload: IRequestEmailChange) => Promise<void>
	verifyOld: (token: string) => Promise<void>
	verifyNew: (token: string) => Promise<void>
}