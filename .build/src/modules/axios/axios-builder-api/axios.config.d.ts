import { AxiosRequestConfig } from 'axios';
import { Method } from '../models/axios-config.model';
export declare class AxiosSendRequestConfig implements AxiosRequestConfig {
    baseUrl: string;
    url: string;
    method?: Method;
    headers?: any;
    params?: any;
    data?: any;
    logRequest?: boolean;
    logResponse?: boolean;
    constructor(baseUrl: string, url: string, method: Method, headers: any, params: any, payload: any, logRequest: boolean, logResponse: boolean);
    static ofAxiosConfig(baseUrl: any, url: any, method: any, headers: any, params: any, payload: any, logRequest: any, logResponse: any): AxiosSendRequestConfig;
}
