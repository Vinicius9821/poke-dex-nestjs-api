import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { AxiosConfig } from "../axios-builder-api/axios.config";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { RequestConfig } from "../models/axios-request.config.model";
import { ApiReturn } from "src/modules/app/shared/models/api-return.model";
import { AxiosException } from "../exception/axios-exception.model";

@Injectable()
export class AxiosCreateRequest {
    private readonly responseLogger = new Logger('responseLogger');
    private readonly requestLogger = new Logger('responseLogger');

    async makeRequest<T>(axiosRequestConfig: RequestConfig) {
        
        try {
            if (axiosRequestConfig.logRequest) {
                this.applyRequestLog(axiosRequestConfig);
            }

            const axiosResponse: AxiosResponse | undefined = await this.executeRequest(axiosRequestConfig);

            if (axiosRequestConfig.logResponse) {
                this.applyResponseLog(axiosResponse);
            }

            if (axiosRequestConfig.buildApiReturn) {
                return this.buildApiReturn<T>(axiosResponse);
            }

            return axiosResponse?.data as ApiReturn<T | any>;
        } catch (error) {
            return this.buildApiReturnWithExceptionData(error);
        }
    }

    static getReturnOrError<T>(apiReturn: ApiReturn<T | any>): T {
        if (apiReturn?.success) {
            return apiReturn?.return;
        } else {
            throw new AxiosException('', 0)
                .withMessage(apiReturn?.error)
                .withErrorCode(apiReturn?.errorCode)
                .withData(apiReturn.return)
        }
    }

    buildApiReturn<T>(axiosResponse: AxiosResponse<any, any>) {
        if (this.successReturn(axiosResponse?.status)) {
            return this.buildApiReturnWithSucessData<T>(axiosResponse);
        } else {
            return this.buildApiReturnWithExceptionData<T>(axiosResponse);
        }
    }
    
    successReturn(status: number): boolean {
       return status === HttpStatus.OK || status === HttpStatus.CREATED;
    }

    buildApiReturnWithExceptionData<T>(axiosResponse: AxiosResponse<any, any>): ApiReturn<T | any> {
        return {
            error: axiosResponse?.statusText,
            return: axiosResponse?.data,
            success: false,
            errorCode: axiosResponse?.status?.toString(),
            status: axiosResponse?.status
        } as ApiReturn<any>;
    }

    buildApiReturnWithSucessData<T>(axiosResponse: AxiosResponse<any, any>): ApiReturn<T> {
        return {
            return: axiosResponse?.data,
            success: true,
            status: axiosResponse?.status
        } as ApiReturn<T>;
    }

    applyResponseLog(axiosResponse: AxiosResponse<any, any>): void {
        this.responseLogger.log(JSON.stringify(axiosResponse?.data));
        this.responseLogger.log(`Headers - ${JSON.stringify(axiosResponse?.headers)}`);
        this.responseLogger.log(`Status - ${JSON.stringify(axiosResponse?.status)}`);
        this.responseLogger.log(`Status Text - ${JSON.stringify(axiosResponse?.statusText)}`);
        this.responseLogger.log(`Config - ${JSON.stringify(axiosResponse?.config)}`);
    }

    executeRequest(axiosRequestConfig: RequestConfig): Promise<AxiosResponse<any, any>> {
        if (axiosRequestConfig.logRequest) {
            this.applyRequestLog(axiosRequestConfig);
        }

        return axios.request(axiosRequestConfig);
    }

    applyRequestLog(axiosConfig: RequestConfig): void {
        return this.requestLogger.log(JSON.stringify(axiosConfig));
    }
}