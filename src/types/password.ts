export interface IForgotPassword {
	email: string
	captcha?: string
}

export interface ISetPassword {
	password1: string
	password2: string
}

export interface IPasswordStatusResponse {
	hasPassword: boolean
}

export interface IChangePassword extends ISetPassword {
	oldPassword: string
}

export interface IResetPassword extends ISetPassword {
	token: string
}


export default interface IApi {
	forgotPassword: (payload: IForgotPassword) => Promise<void>
	getPasswordStatus: () => Promise<IPasswordStatusResponse>
	setPassword: (payload: ISetPassword) => Promise<void>
	changePassword: (payload: IChangePassword) => Promise<void>
	resetPassword: (payload: IResetPassword) => Promise<void>
}