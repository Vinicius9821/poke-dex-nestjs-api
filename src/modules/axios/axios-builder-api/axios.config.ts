import { AxiosRequestConfig } from 'axios';
import { Method } from '../models/axios-config.model';

export class AxiosSendRequestConfig implements AxiosRequestConfig {
  baseUrl: string;
  url: string;
  method?: Method;
  headers?: any;
  params?: any;
  data?: any;
  logRequest?: boolean;
  logResponse?: boolean;

  constructor(
    baseUrl: string,
    url: string,
    method: Method,
    headers: any,
    params: any,
    payload: any,
    logRequest: boolean,
    logResponse: boolean,
  ) {
    this.baseUrl = baseUrl;
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.params = params;
    this.data = payload;
    this.logRequest = logRequest;
    this.logResponse = logResponse;
  }

  public static ofAxiosConfig(
    baseUrl,
    url,
    method,
    headers,
    params,
    payload,
    logRequest,
    logResponse,
  ) {
    return new AxiosSendRequestConfig(
      baseUrl,
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
