import { Injectable, Logger } from '@nestjs/common';
import { PokemonModel } from '../../shared/models/pokemon.model';
import { PokeDexApiIntegrator } from '../pokedex-api-integrator/poke-api.integrator';

@Injectable()
export class PokeDexService {
  private readonly logger = new Logger();

  constructor(private readonly pokeDexApiIntegrator: PokeDexApiIntegrator) {}

  async getHelloWorld(): Promise<string> {
    return await 'Hello World!';
  }

  async getPokemonByNameFromPokeApi(
    pokemon: string,
  ): Promise<PokemonModel | null> {
    let pokemonModel: PokemonModel;

    try {
      pokemonModel = await this.pokeDexApiIntegrator.getPokemonByName(pokemon);
      if (pokemonModel) {
        return pokemonModel;
      }
    } catch (error) {
      this.logger.error(error);
    }

    return null;
  }
}
