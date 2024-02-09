
// 统一管理用户相关接口
import request from '@/utils/request'

import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData,
} from './type'

enum API {
  LOGIN_URL = 'http://114.115.179.162:8022/prod-api/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const reqLogin = (data: LoginFormData) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL)

export const reqLogOut = () => request.post<any, any>(API.LOGOUT_URL)