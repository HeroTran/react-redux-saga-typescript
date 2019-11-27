declare namespace API {
    export interface PayloadPagination<T> {
        results: T;
        page: number;
        pageSize: number;
        total: number;
    }

    export interface RespondAPILogin<T> {
        isSuccess: boolean;
        token: string;
        data: T
    }

    export interface RespondAPI<T> {
        isSuccess: boolean;
        data: T
    }
}