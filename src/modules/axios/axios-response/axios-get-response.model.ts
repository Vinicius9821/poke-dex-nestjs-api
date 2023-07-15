import { AxiosException } from '../exception/axios-exception.model';
import { ApiReturn } from './../../uses-case/shared/models/api-return.model';

export class AxiosGetResponse {
  static returnOrError<T>(apiReturn: ApiReturn<T | any>): T {
    if (this.successWithApiReturn(apiReturn)) {
      return this.getReturn(apiReturn);
    } else {
      throw this.apiException(apiReturn);
    }
  }

  static successWithApiReturn(apiReturn: ApiReturn<any>) {
    return apiReturn?.success === true;
  }

  private static getReturn<T>(apiReturn: ApiReturn<any>): T {
    return apiReturn?.return;
  }

  private static apiException(apiReturn: ApiReturn<any>): AxiosException {
    throw new AxiosException()
      .withMessage(apiReturn?.error)
      .withHttpStatus(apiReturn?.status);
  }
}
