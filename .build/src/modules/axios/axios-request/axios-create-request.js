"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosCreateRequest = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const axios_exception_model_1 = require("../exception/axios-exception.model");
let AxiosCreateRequest = exports.AxiosCreateRequest = class AxiosCreateRequest {
    constructor() {
        this.responseLogger = new common_1.Logger('responseLogger');
        this.requestLogger = new common_1.Logger('responseLogger');
    }
    async makeRequest(axiosRequestConfig) {
        try {
            if (axiosRequestConfig.logRequest) {
                this.applyRequestLog(axiosRequestConfig);
            }
            const axiosResponse = await this.executeRequest(axiosRequestConfig);
            if (axiosRequestConfig.logResponse) {
                this.applyResponseLog(axiosResponse);
            }
            if (axiosRequestConfig.buildApiReturn) {
                return this.buildApiReturn(axiosResponse);
            }
            return axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.data;
        }
        catch (error) {
            return this.buildApiReturnWithExceptionData(error);
        }
    }
    static getReturnOrError(apiReturn) {
        if (apiReturn === null || apiReturn === void 0 ? void 0 : apiReturn.success) {
            return apiReturn === null || apiReturn === void 0 ? void 0 : apiReturn.return;
        }
        else {
            throw new axios_exception_model_1.AxiosException('', 0)
                .withMessage(apiReturn === null || apiReturn === void 0 ? void 0 : apiReturn.error)
                .withErrorCode(apiReturn === null || apiReturn === void 0 ? void 0 : apiReturn.errorCode)
                .withData(apiReturn.return);
        }
    }
    buildApiReturn(axiosResponse) {
        if (this.successReturn(axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.status)) {
            return this.buildApiReturnWithSucessData(axiosResponse);
        }
        else {
            return this.buildApiReturnWithExceptionData(axiosResponse);
        }
    }
    successReturn(status) {
        return status === common_1.HttpStatus.OK || status === common_1.HttpStatus.CREATED;
    }
    buildApiReturnWithExceptionData(axiosResponse) {
        var _a;
        return {
            error: axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.statusText,
            return: axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.data,
            success: false,
            errorCode: (_a = axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.status) === null || _a === void 0 ? void 0 : _a.toString(),
            status: axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.status
        };
    }
    buildApiReturnWithSucessData(axiosResponse) {
        return {
            return: axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.data,
            success: true,
            status: axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.status
        };
    }
    applyResponseLog(axiosResponse) {
        this.responseLogger.log(JSON.stringify(axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.data));
        this.responseLogger.log(`Headers - ${JSON.stringify(axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.headers)}`);
        this.responseLogger.log(`Status - ${JSON.stringify(axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.status)}`);
        this.responseLogger.log(`Status Text - ${JSON.stringify(axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.statusText)}`);
        this.responseLogger.log(`Config - ${JSON.stringify(axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.config)}`);
    }
    executeRequest(axiosRequestConfig) {
        if (axiosRequestConfig.logRequest) {
            this.applyRequestLog(axiosRequestConfig);
        }
        return axios_1.default.request(axiosRequestConfig);
    }
    applyRequestLog(axiosConfig) {
        return this.requestLogger.log(JSON.stringify(axiosConfig));
    }
};
exports.AxiosCreateRequest = AxiosCreateRequest = __decorate([
    (0, common_1.Injectable)()
], AxiosCreateRequest);
//# sourceMappingURL=axios-create-request.js.map