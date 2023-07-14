import { HtppMethod } from "src/modules/axios/models/enum/http-method.enum";
import { AxiosConfig } from "./axios.config";
export declare class AxiosBuildClient {
    private baseUrl;
    private path;
    private params;
    private payload;
    private headers;
    private method;
    private logRequest;
    private logResponse;
    private buildApiReturn;
    constructor();
    withBaseUrl(baseUrl: string): AxiosBuildClient;
    withMethod(method: HtppMethod): AxiosBuildClient;
    withPath(path: string): AxiosBuildClient;
    withQuery(param: string, value: any): AxiosBuildClient;
    withPayload(payload: any): AxiosBuildClient;
    withHeader(header: string, value: string): AxiosBuildClient;
    withAuthorization(type: string, value: string): AxiosBuildClient;
    withCustomAuthorization(value?: string): AxiosBuildClient;
    withLogRequest(): AxiosBuildClient;
    withLogResponse(): AxiosBuildClient;
    buildReturn(): AxiosBuildClient;
    buildAxios(): AxiosConfig;
    private checkBaseUrlIsNullOrEmpty;
    private checkHttpMethodIsNullOrEmpty;
    private buildAxiosRequestConfig;
    private isPost;
    private setupJsonAsContentType;
}