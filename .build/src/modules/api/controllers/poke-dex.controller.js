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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeDexController = void 0;
const common_1 = require("@nestjs/common");
const poke_dex_service_1 = require("./../../../modules/uses-case/integrator/services/poke-dex.service");
let PokeDexController = exports.PokeDexController = class PokeDexController {
    constructor(pokeDexService) {
        this.pokeDexService = pokeDexService;
    }
    getHelloWorld() {
        return this.pokeDexService.getHelloWorld();
    }
    getPokemonByName(pokemon) {
        return this.pokeDexService.getPokemonByNameFromPokeApi(pokemon);
    }
};
__decorate([
    (0, common_1.Get)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PokeDexController.prototype, "getHelloWorld", null);
__decorate([
    (0, common_1.Get)('pokemon/:pokemon'),
    __param(0, (0, common_1.Param)('pokemon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PokeDexController.prototype, "getPokemonByName", null);
exports.PokeDexController = PokeDexController = __decorate([
    (0, common_1.Controller)('/api'),
    __metadata("design:paramtypes", [poke_dex_service_1.PokeDexService])
], PokeDexController);
//# sourceMappingURL=poke-dex.controller.js.map