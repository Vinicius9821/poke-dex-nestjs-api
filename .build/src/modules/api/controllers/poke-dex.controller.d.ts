import { PokeDexService } from '../../app/services/poke-dex.service';
import { PokemonModel } from 'src/modules/app/shared/models/pokemon.model';
export declare class PokeDexController {
    private readonly pokeDexService;
    constructor(pokeDexService: PokeDexService);
    getHello(pokemon: string): Promise<PokemonModel | null>;
}
