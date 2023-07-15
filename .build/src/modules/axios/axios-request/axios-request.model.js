"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosRequest = void 0;
const common_1 = require("@nestjs/common");
class AxiosRequest {
    constructor() {
        this.responseLogger = new common_1.Logger('ResponseLog');
        this.requestLogger = new common_1.Logger('RequestLog');
    }
    async request(axiosConfig) {
        try {
            const axiosResponse = await this.executeRequest();
        }
        catch (error) { }
    }
    executeRequest() {
        throw new Error('Method not implemented.');
    }
}
exports.AxiosRequest = AxiosRequest;
//# sourceMappingURL=axios-request.model.js.map