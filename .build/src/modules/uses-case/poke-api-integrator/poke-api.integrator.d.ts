import { PokemonModel } from '../../../modules/app/shared/models/pokemon.model';
import { AxiosCreateRequest } from 'src/modules/axios/axios-request/axios-create-request';
export declare class PokeDexApiIntegrator {
    private readonly axiosCreateRequest;
    constructor(axiosCreateRequest: AxiosCreateRequest);
    private readonly pokeDexApiBaseUrl;
    getPokemonByName(pokemon: string): Promise<PokemonModel>;
}
