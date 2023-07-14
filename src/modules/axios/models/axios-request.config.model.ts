import { AxiosAdapter, AxiosBasicCredentials, AxiosHeaderValue, AxiosHeaders, AxiosProgressEvent, AxiosProxyConfig, AxiosRequestConfig, AxiosRequestTransformer, AxiosResponseTransformer, CancelToken, CustomParamsSerializer, ParamsSerializerOptions, TransitionalOptions } from "axios";
import { Method } from "./axios-config.model";

export class RequestConfig implements AxiosRequestConfig {
    logRequest?: boolean;
    logResponse?: boolean;
    buildApiReturn?: boolean;
    url?: string;
    method?: Method;
    baseURL?: string;
    transformRequest?: any | any[];
    transformResponse?: any | any[];
    headers?: any;
    params?: any;
    paramsSerializer?: any;
    data?: any;
    timeout?: number;
    timeoutErrorMessage?: string;
    withCredentials?: boolean;
    adapter?: AxiosAdapter;
    auth?: AxiosBasicCredentials;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: any) => void;
    onDownloadProgress?: (progressEvent: any) => void;
    maxContentLength?: number;
    validateStatus?: ((status: number) => boolean) | null;
    maxBodyLength?: number;
    maxRedirects?: number;
    socketPath?: string;
    httpAgent?: any;
    proxy?: false | AxiosProxyConfig;
    cancelToken?: CancelToken;
    decompress?: boolean;
    transitional?: TransitionalOptions;
}