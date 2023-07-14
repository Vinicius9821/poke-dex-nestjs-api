import { Logger } from "@nestjs/common";
import { AxiosConfig } from "../axios-builder-api/axios.config";
import axios, {AxiosResponse} from "axios";


export class AxiosRequest {
    private readonly responseLogger = new Logger('ResponseLog');
    private readonly requestLogger = new Logger('RequestLog');

    async request<T>(axiosConfig: AxiosConfig) {

        try {

            const axiosResponse: AxiosResponse | undefined = await this.executeRequest();

        } catch (error) {

        }
    }
    executeRequest(): any {
        throw new Error("Method not implemented.");
    }
}