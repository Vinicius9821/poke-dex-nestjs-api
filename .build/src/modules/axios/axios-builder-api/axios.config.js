"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosSendRequestConfig = void 0;
class AxiosSendRequestConfig {
    constructor(baseUrl, url, method, headers, params, payload, logRequest, logResponse) {
        this.baseUrl = baseUrl;
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.params = params;
        this.data = payload;
        this.logRequest = logRequest;
        this.logResponse = logResponse;
    }
    static ofAxiosConfig(baseUrl, url, method, headers, params, payload, logRequest, logResponse) {
        return new AxiosSendRequestConfig(baseUrl, url, method, headers, params, payload, logRequest, logResponse);
    }
}
exports.AxiosSendRequestConfig = AxiosSendRequestConfig;
//# sourceMappingURL=axios.config.js.map