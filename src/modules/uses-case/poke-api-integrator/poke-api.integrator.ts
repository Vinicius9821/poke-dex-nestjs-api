import { Injectable } from '@nestjs/common';
import { PokemonModel } from '../../../modules/app/shared/models/pokemon.model';

import { AxiosBuildClient } from '../../../modules/axios/axios-builder-api/axios-build.client';
import { HtppMethod } from '../../../modules/axios/models/enum/http-method.enum';
import { AxiosCreateRequest } from 'src/modules/axios/axios-request/axios-create-request';
import { AxiosGetResponse } from 'src/modules/axios/axios-response/axios-get-response.model';

@Injectable()
export class PokeDexApiIntegrator {

    constructor(
        private readonly axiosCreateRequest: AxiosCreateRequest
    ) {}

    private readonly pokeDexApiBaseUrl = 'https://pokeapi.co/api/v2';

    async getPokemonByName(pokemon: string): Promise<PokemonModel> {
        const axios = new AxiosBuildClient()
        .withBaseUrl(this.pokeDexApiBaseUrl)
        .withPath(`/pokemon/${pokemon}`)
        .withMethod(HtppMethod.GET)
        .buildReturn()
        .buildAxios();

        const apiReturn = await this.axiosCreateRequest.makeRequest<PokemonModel>(axios);

        return AxiosGetResponse.returnOrError(apiReturn);
    }
}
 