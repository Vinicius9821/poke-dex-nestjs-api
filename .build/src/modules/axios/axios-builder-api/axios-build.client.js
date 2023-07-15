"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosBuildClient = void 0;
const http_method_enum_1 = require("./../../../modules/axios/models/enum/http-method.enum");
const axios_config_1 = require("./axios.config");
class AxiosBuildClient {
    constructor() {
        this.buildApiReturn = false;
        this.path = [];
    }
    withBaseUrl(baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    withMethod(method) {
        this.method = method;
        return this;
    }
    withPath(path) {
        this.path = [...this.path, path];
        return this;
    }
    withQuery(param, value) {
        if (!this.params)
            this.params = {};
        this.params[param] = value;
        return this;
    }
    withPayload(payload) {
        this.payload = payload;
        return this;
    }
    withHeader(header, value) {
        if (!this.headers) {
            this.headers = {};
        }
        this.headers[header] = value;
        return this;
    }
    withAuthorization(type, value) {
        return this.withHeader('Authorization', `${type} ${value}`);
    }
    withCustomAuthorization(value) {
        return this.withHeader('Authorization', value);
    }
    withLogRequest() {
        this.logRequest = true;
        return this;
    }
    withLogResponse() {
        this.logResponse = true;
        return this;
    }
    buildReturn() {
        this.buildApiReturn = this.buildApiReturn;
        return this;
    }
    buildAxios() {
        this.checkBaseUrlIsNullOrEmpty();
        this.checkHttpMethodIsNullOrEmpty();
        return this.buildAxiosRequestConfig();
    }
    checkBaseUrlIsNullOrEmpty() {
        if (!this.baseUrl) {
            throw new Error('base url is null or empty');
        }
    }
    checkHttpMethodIsNullOrEmpty() {
        if (!this.method) {
            throw new Error('http method is null or empty');
        }
    }
    buildAxiosRequestConfig() {
        if (this.isPost()) {
            this.setupJsonAsContentType();
        }
        return axios_config_1.AxiosConfig.ofAxiosConfig(this.baseUrl, this.method, this.headers, this.params, this.payload, this.logRequest, this.logResponse);
    }
    isPost() {
        return this.method === http_method_enum_1.HtppMethod.POST;
    }
    setupJsonAsContentType() {
        this.headers = Object.assign(Object.assign({}, this.headers), { 'Content-Type': 'application/json' });
    }
}
exports.AxiosBuildClient = AxiosBuildClient;
//# sourceMappingURL=axios-build.client.js.map