import { Injectable, Logger } from '@nestjs/common';
import { PokemonModel } from '../shared/models/pokemon.model';
import { PokeDexApiIntegrator } from './../../../modules/uses-case/poke-api-integrator/poke-api.integrator';

@Injectable()
export class PokeDexService {

  private readonly logger = new Logger();

  constructor(private readonly pokeDexApiIntegrator: PokeDexApiIntegrator) {}

  async getPokemonByNameFromPokeApi(pokemon: string): Promise<PokemonModel | null> {
    let pokemonModel: PokemonModel;

    try {
      pokemonModel = await this.pokeDexApiIntegrator.getPokemonByName(pokemon);
      if (pokemonModel){
        return pokemonModel;
      }
    } catch(error) {
      this.logger.error(error);
    }

    return null;
  }
}
