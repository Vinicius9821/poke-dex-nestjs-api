import { ApiReturn } from './../../uses-case/shared/models/api-return.model';

export declare class AxiosGetResponse {
  static returnOrError<T>(apiReturn: ApiReturn<T | any>): T;
  private static successWithApiReturn;
  private static getReturn;
  private static Exception;
}
