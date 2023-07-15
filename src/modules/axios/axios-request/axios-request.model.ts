import { Logger } from '@nestjs/common';
import { AxiosSendRequestConfig } from '../axios-builder-api/axios.config';
import axios, { AxiosResponse } from 'axios';

export class AxiosRequest {
  private readonly responseLogger = new Logger('ResponseLog');
  private readonly requestLogger = new Logger('RequestLog');

  async request<T>(axiosConfig: AxiosSendRequestConfig) {
    try {
      const axiosResponse: AxiosResponse | undefined =
        await this.executeRequest();
    } catch (error) {}
  }
  executeRequest(): any {
    throw new Error('Method not implemented.');
  }
}
