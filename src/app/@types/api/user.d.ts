declare namespace API {
  export interface User {
    _id: string;
    userId: number;
    name: string;
    email: string;
    password: string;
    deleted: number;
    date: string;
  }
}