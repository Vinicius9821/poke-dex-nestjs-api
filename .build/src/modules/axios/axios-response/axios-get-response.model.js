"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosGetResponse = void 0;
const axios_exception_model_1 = require("../exception/axios-exception.model");
class AxiosGetResponse {
    static returnOrError(apiReturn) {
        if (this.successWithApiReturn(apiReturn)) {
            return this.getReturn(apiReturn);
        }
        else {
            throw this.apiException(apiReturn);
        }
    }
    static successWithApiReturn(apiReturn) {
        return (apiReturn === null || apiReturn === void 0 ? void 0 : apiReturn.success) === true;
    }
    static getReturn(apiReturn) {
        return apiReturn === null || apiReturn === void 0 ? void 0 : apiReturn.return;
    }
    static apiException(apiReturn) {
        throw new axios_exception_model_1.AxiosException()
            .withMessage(apiReturn === null || apiReturn === void 0 ? void 0 : apiReturn.error)
            .withHttpStatus(apiReturn === null || apiReturn === void 0 ? void 0 : apiReturn.status);
    }
}
exports.AxiosGetResponse = AxiosGetResponse;
//# sourceMappingURL=axios-get-response.model.js.map