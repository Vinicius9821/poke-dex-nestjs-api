"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegratorApiModule = void 0;
const common_1 = require("@nestjs/common");
const poke_dex_service_1 = require("./services/poke-dex.service");
const poke_api_integrator_1 = require("./pokedex-api-integrator/poke-api.integrator");
const axios_create_request_1 = require("../../axios/axios-request/axios-create-request");
let IntegratorApiModule = exports.IntegratorApiModule = class IntegratorApiModule {
};
exports.IntegratorApiModule = IntegratorApiModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [poke_dex_service_1.PokeDexService, poke_api_integrator_1.PokeDexApiIntegrator, axios_create_request_1.AxiosCreateRequest],
        exports: [poke_dex_service_1.PokeDexService, poke_api_integrator_1.PokeDexApiIntegrator, axios_create_request_1.AxiosCreateRequest],
    })
], IntegratorApiModule);
//# sourceMappingURL=integrator-api.module.js.map