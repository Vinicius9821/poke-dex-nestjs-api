"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosException = void 0;
const common_1 = require("@nestjs/common");
class AxiosException extends common_1.HttpException {
    constructor(message, status) {
        super(message, status);
    }
    static ofValidation(errorCode, errorMessage) {
        return new AxiosException('', 0).withErrorCode(errorCode).withMessage(errorMessage).withHttpStatus(common_1.HttpStatus.BAD_REQUEST);
    }
    static ofError(errorCode, errorMessage) {
        return new AxiosException('', 0).withErrorCode(errorCode).withMessage(errorMessage).withHttpStatus(common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    static ofServiceResultModel(model) {
        this.logError(model);
        if (model.businessException) {
            return this.ofValidation(model.errorCode, model.errorMessage);
        }
        else {
            return this.ofError(model.errorCode, model.errorMessage);
        }
    }
    static logError(model) {
        throw new Error("Method not implemented.");
    }
    withErrorCode(errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    withMessage(message) {
        this.message = message;
        return this;
    }
    withHttpStatus(status) {
        this.statusCode = status !== null && status !== void 0 ? status : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        return this;
    }
    withTrace(traceId) {
        this.traceId = traceId;
        return this;
    }
    withData(data) {
        this.data = data;
        return this;
    }
    getErrorCode() {
        return this.errorCode;
    }
    getTraceId() {
        return this.traceId;
    }
    getResponseDetails() {
        return this.responseDetails;
    }
    getData() {
        return this.data;
    }
}
exports.AxiosException = AxiosException;
AxiosException.logger = new common_1.Logger();
//# sourceMappingURL=axios-exception.model.js.map