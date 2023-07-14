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
exports.PokeDexService = void 0;
const common_1 = require("@nestjs/common");
const poke_api_integrator_1 = require("./../../../modules/uses-case/poke-api-integrator/poke-api.integrator");
let PokeDexService = exports.PokeDexService = class PokeDexService {
    constructor(pokeDexApiIntegrator) {
        this.pokeDexApiIntegrator = pokeDexApiIntegrator;
        this.logger = new common_1.Logger();
    }
    async getPokemonByNameFromPokeApi(pokemon) {
        let pokemonModel;
        try {
            pokemonModel = await this.pokeDexApiIntegrator.getPokemonByName(pokemon);
            if (pokemonModel) {
                return pokemonModel;
            }
        }
        catch (error) {
            this.logger.error(error);
        }
        return null;
    }
};
exports.PokeDexService = PokeDexService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [poke_api_integrator_1.PokeDexApiIntegrator])
], PokeDexService);
//# sourceMappingURL=poke-dex.service.js.map