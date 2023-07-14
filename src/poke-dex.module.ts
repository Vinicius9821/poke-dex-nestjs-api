import { Module } from '@nestjs/common';
import { PokeDexController } from './modules/api/controllers/poke-dex.controller';
import { PokeDexService } from './modules/app/services/poke-dex.service';

@Module({
  imports: [],
  controllers: [PokeDexController],
  providers: [PokeDexService],
})
export class AppModule {}
