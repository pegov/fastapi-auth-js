export interface IRegister {
	email: string
	username: string
	password1: string
	password2: string
	captcha?: string
}

export interface ILogin {
	login: string
	password: string
}

export default interface IApi {
	url: {
		login: string
	}
	register: (payload: IRegister) => Promise<void>
	login: (payload: ILogin) => Promise<void>
	logout: () => Promise<void>
}