import { PokemonModel } from '../../shared/models/pokemon.model';
import { PokeDexApiIntegrator } from '../pokedex-api-integrator/poke-api.integrator';
export declare class PokeDexService {
    private readonly pokeDexApiIntegrator;
    private readonly logger;
    constructor(pokeDexApiIntegrator: PokeDexApiIntegrator);
    getPokemonByNameFromPokeApi(pokemon: string): Promise<PokemonModel | null>;
}
