import { HttpStatus } from '@nestjs/common';
export interface ApiReturn<T> {
    error: string;
    return: T;
    success: boolean;
    errorCode?: string;
    status: HttpStatus;
    traceId: string;
}
