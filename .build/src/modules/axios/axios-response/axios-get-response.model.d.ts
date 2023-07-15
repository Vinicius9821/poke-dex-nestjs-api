import { ApiReturn } from './../../uses-case/shared/models/api-return.model';
export declare class AxiosGetResponse {
    static returnOrError<T>(apiReturn: ApiReturn<T | any>): T;
    static successWithApiReturn(apiReturn: ApiReturn<any>): boolean;
    private static getReturn;
    private static apiException;
}
