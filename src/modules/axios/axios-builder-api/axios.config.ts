import { AxiosRequestConfig } from 'axios';
import { Method } from '../models/axios-config.model';

export class AxiosConfig implements AxiosRequestConfig {
  baseUrl: string;
  method?: Method;
  headers?: any;
  params?: any;
  data?: any;
  logRequest?: boolean;
  logResponse?: boolean;

  constructor(
    url: string,
    method: Method,
    headers: any,
    params: any,
    payload: any,
    logRequest: boolean,
    logResponse: boolean,
  ) {
    this.baseUrl = url;
    this.method = method;
    this.headers = headers;
    this.params = params;
    this.data = payload;
    this.logRequest = logRequest;
    this.logResponse = logResponse;
  }

  public static ofAxiosConfig(
    url,
    method,
    headers,
    params,
    payload,
    logRequest,
    logResponse,
  ) {
    return new AxiosConfig(
      url,
      method,
      headers,
      params,
      payload,
      logRequest,
      logResponse,
    );
  }
}
