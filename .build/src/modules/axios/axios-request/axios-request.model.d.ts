import { AxiosConfig } from '../axios-builder-api/axios.config';
export declare class AxiosRequest {
    private readonly responseLogger;
    private readonly requestLogger;
    request<T>(axiosConfig: AxiosConfig): Promise<void>;
    executeRequest(): any;
}
