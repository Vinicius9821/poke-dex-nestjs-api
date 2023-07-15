"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeDexApiIntegrator = void 0;
const common_1 = require("@nestjs/common");
const axios_build_client_1 = require("./../../../../modules/axios/axios-builder-api/axios-build.client");
const axios_create_request_1 = require("./../../../../modules/axios/axios-request/axios-create-request");
const axios_get_response_model_1 = require("./../../../../modules/axios/axios-response/axios-get-response.model");
const http_method_enum_1 = require("./../../../../modules/axios/models/enum/http-method.enum");
let PokeDexApiIntegrator = exports.PokeDexApiIntegrator = class PokeDexApiIntegrator {
    constructor(axiosCreateRequest) {
        this.axiosCreateRequest = axiosCreateRequest;
        this.pokeDexApiBaseUrl = 'https://pokeapi.co/api/v2';
    }
    async getPokemonByName(pokemon) {
        console.log(pokemon);
        const axios = new axios_build_client_1.AxiosBuildClient()
            .withBaseUrl(this.pokeDexApiBaseUrl)
            .withPath(`pokemon/${pokemon}`)
            .withMethod(http_method_enum_1.HtppMethod.GET)
            .buildReturn()
            .buildAxios();
        console.log(axios);
        const apiReturn = await this.axiosCreateRequest.makeRequest(axios);
        return axios_get_response_model_1.AxiosGetResponse.returnOrError(apiReturn);
    }
};
exports.PokeDexApiIntegrator = PokeDexApiIntegrator = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_create_request_1.AxiosCreateRequest])
], PokeDexApiIntegrator);
//# sourceMappingURL=poke-api.integrator.js.map