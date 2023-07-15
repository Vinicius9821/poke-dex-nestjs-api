import { Injectable } from '@nestjs/common';
import { AxiosBuildClient } from './../../../../modules/axios/axios-builder-api/axios-build.client';
import { AxiosCreateRequest } from './../../../../modules/axios/axios-request/axios-create-request';
import { AxiosGetResponse } from './../../../../modules/axios/axios-response/axios-get-response.model';
import { PokemonModel } from '../../shared/models/pokemon.model';
import { HtppMethod } from './../../../../modules/axios/models/enum/http-method.enum';

@Injectable()
export class PokeDexApiIntegrator {
  constructor(private readonly axiosCreateRequest: AxiosCreateRequest) {}

  private readonly pokeDexApiBaseUrl = 'https://pokeapi.co/api/v2';

  async getPokemonByName(pokemon: string): Promise<PokemonModel> {
    const axios = new AxiosBuildClient()
      .withBaseUrl(this.pokeDexApiBaseUrl)
      .withPath(`/pokemon/${pokemon}`)
      .withMethod(HtppMethod.GET)
      .buildReturn()
      .buildAxios();

    const apiReturn = await this.axiosCreateRequest.makeRequest<PokemonModel>(
      axios,
    );

    return AxiosGetResponse.returnOrError(apiReturn);
  }
}
