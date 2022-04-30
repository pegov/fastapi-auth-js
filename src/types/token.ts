export interface ITokenPayloadResponse {
	id: number
	username: string
	roles: string[]
}

export interface IRefreshAccessTokenResponse {
	access_token: string
}

export default interface IApi {
	url: {
		refreshAccessToken: string
	}
	payload: () => Promise<ITokenPayloadResponse>
	refreshAccessToken: () => Promise<IRefreshAccessTokenResponse>
}