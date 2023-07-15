import { HttpException, HttpStatus, Logger } from '@nestjs/common';

export type ResponseDetails = {
  status?: number;
  statusMessage?: string;
  headers: any;
  data?: any;
};

export class AxiosException extends HttpException {
  private static logger = new Logger();

  private statusCode: HttpStatus;
  private errorCode?: string | null;
  private traceId?: string | null;
  private responseDetails: ResponseDetails = {
    headers: {},
  };
  private data: any;

  /**
   *
   */
  constructor(message?: string, statusCode?: HttpStatus) {
    if (message === undefined) {
      message = '';
    }
    super(message, statusCode);
  }

  public static ofValidation(
    errorCode: string,
    errorMessage: string,
  ): AxiosException {
    return new AxiosException()
      .withErrorCode(errorCode)
      .withMessage(errorMessage)
      .withHttpStatus(HttpStatus.BAD_REQUEST);
  }

  public static ofError(
    errorCode: string,
    errorMessage: string,
  ): AxiosException {
    return new AxiosException()
      .withErrorCode(errorCode)
      .withMessage(errorMessage)
      .withHttpStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }

  public static ofServiceResultModel(model: any): AxiosException {
    this.logError(model);

    if (model.businessException) {
      return this.ofValidation(model.errorCode, model.errorMessage);
    } else {
      return this.ofError(model.errorCode, model.errorMessage);
    }
  }

  private static logError(model: any) {
    AxiosException.logger.error(model);
  }

  withErrorCode(errorCode?: string): AxiosException {
    this.errorCode = errorCode;
    return this;
  }

  withMessage(message: string): AxiosException {
    this.message = message;
    return this;
  }

  withHttpStatus(status?: HttpStatus): AxiosException {
    this.statusCode = status ?? HttpStatus.INTERNAL_SERVER_ERROR;
    return this;
  }

  withTrace(traceId?: string): AxiosException {
    this.traceId = traceId;
    return this;
  }

  withResponse(responseDetails: ResponseDetails): AxiosException {
    this.responseDetails = responseDetails;
    return this;
  }

  withData(data?: any): AxiosException {
    this.data = data;
    return this;
  }

  getErrorCode() {
    return this.errorCode;
  }

  getStatus() {
    return this.statusCode;
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
