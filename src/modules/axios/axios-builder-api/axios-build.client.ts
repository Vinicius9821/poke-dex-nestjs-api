import { HtppMethod } from "src/modules/axios/models/enum/http-method.enum";
import { AxiosConfig } from "./axios.config";

export class AxiosBuildClient {
    private baseUrl: string;
    private path: string[];
    private params: any;
    private payload: any;
    private headers: any;
    private method: HtppMethod;
    private logRequest: boolean;
    private logResponse: boolean;
    private buildApiReturn: boolean = false;

    constructor() {
        this.path = [];
    }

    withBaseUrl(baseUrl: string): AxiosBuildClient {
        this.baseUrl = baseUrl;
        return this;
    }

    withMethod(method: HtppMethod): AxiosBuildClient {
        this.method = method;
        return this;
    }

    withPath(path: string): AxiosBuildClient {
        this.path = [...this.path, path];
        return this;
    }

    withQuery(param: string, value: any): AxiosBuildClient {
        if (!this.params) this.params = {};

        this.params[param] = value;
        return this;
    }

    withPayload(payload: any): AxiosBuildClient {
        this.payload = payload;
        return this;
    }

    withHeader(header: string, value: string): AxiosBuildClient {
        if (!this.headers) {
            this.headers = {};
        }

        this.headers[header] = value;
        return this;
    }

    withAuthorization(type: string, value: string): AxiosBuildClient {
        return this.withHeader('Authorization', `${type} ${value}`);
    }

    withCustomAuthorization(value?: string): AxiosBuildClient {
        return this.withHeader('Authorization', value as string);
    }

    withLogRequest(): AxiosBuildClient {
        this.logRequest = true;
        return this;
    }

    withLogResponse(): AxiosBuildClient {
        this.logResponse = true;
        return this;
    }

    buildReturn(): AxiosBuildClient {
        this.buildApiReturn = this.buildApiReturn;
        return this;
    }

    buildAxios(){
        this.checkBaseUrlIsNullOrEmpty();
        this.checkHttpMethodIsNullOrEmpty();

        return this.buildAxiosRequestConfig();
    }

    private checkBaseUrlIsNullOrEmpty(): void {
        if (!this.baseUrl) {
            throw new Error("base url is null or empty");
        }
    }

    private checkHttpMethodIsNullOrEmpty(): void {
        if (!this.method) {
            throw new Error("http method is null or empty");
        }
    }

    
    private buildAxiosRequestConfig(): AxiosConfig {
        if (this.isPost()) {
            this.setupJsonAsContentType();
        }

        return AxiosConfig.ofAxiosConfig(
            this.baseUrl,
            this.method,
            this.headers,
            this.params,
            this.payload,
            this.logRequest,
            this.logResponse)
    }

    private isPost(): boolean {
        return this.method === HtppMethod.POST;
    }

    private setupJsonAsContentType() {
        this.headers = {...this.headers, 'Content-Type': 'application/json'}
    }

}