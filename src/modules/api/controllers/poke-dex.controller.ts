import { Controller, Get, Param } from '@nestjs/common';
import { PokeDexService } from '../../app/services/poke-dex.service';
import { PokemonModel } from 'src/modules/app/shared/models/pokemon.model';

@Controller('/api')
export class PokeDexController {
  constructor(private readonly pokeDexService: PokeDexService) {}

  @Get('pokemon/:pokemon')
  getHello(@Param('pokemon') pokemon: string): Promise<PokemonModel | null> {
    return this.pokeDexService.getPokemonByNameFromPokeApi(pokemon);
  }
}
