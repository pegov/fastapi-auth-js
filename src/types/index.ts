import type IAdminApi from "./admin"
import type IAuthApi from "./auth"
import type IEmailApi from "./email"
import type IMeApi from "./me"
import type IPasswordApi from "./password"
import type ITokenApi from "./token"

interface IApi {
	admin: IAdminApi
	auth: IAuthApi
	email: IEmailApi
	me: IMeApi
	password: IPasswordApi
	token: ITokenApi
}

export default IApi