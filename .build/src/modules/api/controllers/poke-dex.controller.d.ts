import { PokeDexService } from './../../../modules/uses-case/integrator/services/poke-dex.service';
import { PokemonModel } from './../../../modules/uses-case/shared/models/pokemon.model';
export declare class PokeDexController {
    private readonly pokeDexService;
    constructor(pokeDexService: PokeDexService);
    getHelloWorld(): Promise<string>;
    getPokemonByName(pokemon: string): Promise<PokemonModel | null>;
}
