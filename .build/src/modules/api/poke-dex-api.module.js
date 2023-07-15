"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodeDexApiModule = void 0;
const common_1 = require("@nestjs/common");
const poke_dex_controller_1 = require("./controllers/poke-dex.controller");
const integrator_api_module_1 = require("../uses-case/integrator/integrator-api.module");
let PodeDexApiModule = exports.PodeDexApiModule = class PodeDexApiModule {
};
exports.PodeDexApiModule = PodeDexApiModule = __decorate([
    (0, common_1.Module)({
        imports: [integrator_api_module_1.IntegratorApiModule],
        controllers: [poke_dex_controller_1.PokeDexController],
    })
], PodeDexApiModule);
//# sourceMappingURL=poke-dex-api.module.js.map