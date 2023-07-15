import { HttpException, HttpStatus } from '@nestjs/common';
export type ResponseDetails = {
    status?: number;
    statusMessage?: string;
    headers: any;
    data?: any;
};
export declare class AxiosException extends HttpException {
    private static logger;
    private statusCode?;
    private errorCode?;
    private traceId?;
    private responseDetails;
    private data;
    constructor(message?: string, statusCode?: HttpStatus);
    static ofValidation(errorCode: string, errorMessage: string): AxiosException;
    static ofError(errorCode: string, errorMessage: string): AxiosException;
    static ofServiceResultModel(model: any): AxiosException;
    private static logError;
    withErrorCode(errorCode?: string): AxiosException;
    withMessage(message: string): AxiosException;
    withHttpStatus(status?: HttpStatus): AxiosException;
    withTrace(traceId?: string): AxiosException;
    withData(data?: any): AxiosException;
    getErrorCode(): string | null | undefined;
    getTraceId(): string | null | undefined;
    getResponseDetails(): ResponseDetails;
    getData(): any;
}
