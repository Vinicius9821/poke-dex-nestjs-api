import { AxiosResponse } from "axios";
import { RequestConfig } from "../models/axios-request.config.model";
import { ApiReturn } from "src/modules/app/shared/models/api-return.model";
export declare class AxiosCreateRequest {
    private readonly responseLogger;
    private readonly requestLogger;
    makeRequest<T>(axiosRequestConfig: RequestConfig): Promise<ApiReturn<any>>;
    static getReturnOrError<T>(apiReturn: ApiReturn<T | any>): T;
    buildApiReturn<T>(axiosResponse: AxiosResponse<any, any>): ApiReturn<any>;
    successReturn(status: number): boolean;
    buildApiReturnWithExceptionData<T>(axiosResponse: AxiosResponse<any, any>): ApiReturn<T | any>;
    buildApiReturnWithSucessData<T>(axiosResponse: AxiosResponse<any, any>): ApiReturn<T>;
    applyResponseLog(axiosResponse: AxiosResponse<any, any>): void;
    executeRequest(axiosRequestConfig: RequestConfig): Promise<AxiosResponse<any, any>>;
    applyRequestLog(axiosConfig: RequestConfig): void;
}
