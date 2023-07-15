"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpBaseUrlHelper = void 0;
class HttpBaseUrlHelper {
    static hasSlashInBaseUrl(baseUrl) {
        return baseUrl.endsWith('/');
    }
    static removeSlashFromBaseUrl(baseUrl) {
        if (this.hasSlashInBaseUrl(baseUrl)) {
            return baseUrl.substring(0, baseUrl.length - 1);
        }
        return baseUrl;
    }
}
exports.HttpBaseUrlHelper = HttpBaseUrlHelper;
//# sourceMappingURL=http-base-url.helper.js.map