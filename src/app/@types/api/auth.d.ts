
declare namespace API {
  export interface UserLogin<T> {
    userInfo: T;
    accessToken: string;
  }
  export interface AuthLogin {
    isSuccess: boolean;
    token: string;
    userInfo: API.User
  }
  export interface LoginData {
    email: string;
    password: string;
  }
  export interface RegisterData {
    name : string;
    email: string;
    password: string;
  }
  export interface AuthRegister {
    isSuccess: boolean;
  }
  export interface AuthFindByCode {
    codeLogin: string;
  }
}