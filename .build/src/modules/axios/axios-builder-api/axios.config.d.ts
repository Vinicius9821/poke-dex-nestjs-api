import { AxiosRequestConfig } from "axios";
import { Method } from "../models/axios-config.model";
export declare class AxiosConfig implements AxiosRequestConfig {
    baseUrl: string;
    method?: Method;
    headers?: any;
    params?: any;
    data?: any;
    logRequest?: boolean;
    logResponse?: boolean;
    constructor(url: string, method: Method, headers: any, params: any, payload: any, logRequest: boolean, logResponse: boolean);
    static ofAxiosConfig(url: any, method: any, headers: any, params: any, payload: any, logRequest: any, logResponse: any): AxiosConfig;
}
