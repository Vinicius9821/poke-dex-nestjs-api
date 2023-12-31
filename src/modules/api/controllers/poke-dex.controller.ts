import { Controller, Get, Param } from '@nestjs/common';
import { PokeDexService } from './../../../modules/uses-case/integrator/services/poke-dex.service';
import { PokemonModel } from './../../../modules/uses-case/shared/models/pokemon.model';

@Controller('/api')
export class PokeDexController {
  constructor(private readonly pokeDexService: PokeDexService) {}

  @Get('hello')
  getHelloWorld(): Promise<string> {
    return this.pokeDexService.getHelloWorld();
  }

  @Get('pokemon/:pokemon')
  getPokemonByName(
    @Param('pokemon') pokemon: string,
  ): Promise<PokemonModel | null> {
    return this.pokeDexService.getPokemonByNameFromPokeApi(pokemon);
  }
}
