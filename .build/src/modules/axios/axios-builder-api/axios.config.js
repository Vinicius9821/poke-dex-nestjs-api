"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosConfig = void 0;
class AxiosConfig {
    constructor(url, method, headers, params, payload, logRequest, logResponse) {
        this.baseUrl = url;
        this.method = method;
        this.headers = headers;
        this.params = params;
        this.data = payload;
        this.logRequest = logRequest;
        this.logResponse = logResponse;
    }
    static ofAxiosConfig(url, method, headers, params, payload, logRequest, logResponse) {
        return new AxiosConfig(url, method, headers, params, payload, logRequest, logResponse);
    }
}
exports.AxiosConfig = AxiosConfig;
//# sourceMappingURL=axios.config.js.map