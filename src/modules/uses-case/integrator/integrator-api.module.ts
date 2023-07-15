import { Module } from '@nestjs/common';
import { PokeDexService } from './services/poke-dex.service';
import { PokeDexApiIntegrator } from './pokedex-api-integrator/poke-api.integrator';
import { AxiosCreateRequest } from 'src/modules/axios/axios-request/axios-create-request';

@Module({
  imports: [],
  providers: [PokeDexService, PokeDexApiIntegrator, AxiosCreateRequest],
  exports: [PokeDexService, PokeDexApiIntegrator, AxiosCreateRequest],
})
export class IntegratorApiModule {}
