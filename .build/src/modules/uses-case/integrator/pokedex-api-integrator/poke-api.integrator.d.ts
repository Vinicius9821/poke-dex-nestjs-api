import { AxiosCreateRequest } from './../../../../modules/axios/axios-request/axios-create-request';
import { PokemonModel } from '../../shared/models/pokemon.model';
export declare class PokeDexApiIntegrator {
    private readonly axiosCreateRequest;
    constructor(axiosCreateRequest: AxiosCreateRequest);
    private readonly pokeDexApiBaseUrl;
    getPokemonByName(pokemon: string): Promise<PokemonModel>;
}
