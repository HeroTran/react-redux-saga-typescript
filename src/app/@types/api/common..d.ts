declare namespace API {
  export interface AuthorizeData {
    user_oauth_approval: string;
    [key: string]: string;
    authorize: string;
  }
  export interface ErrorResponse {
    data: {
      httpStatusCode: number;
      subType: string;
      success: boolean;
    }
  }
}