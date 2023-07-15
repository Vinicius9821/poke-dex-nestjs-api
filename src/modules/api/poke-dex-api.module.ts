import { Module } from '@nestjs/common';
import { PokeDexController } from './controllers/poke-dex.controller';
import { IntegratorApiModule } from '../uses-case/integrator/integrator-api.module';

@Module({
  imports: [IntegratorApiModule],
  controllers: [PokeDexController],
})
export class PodeDexApiModule {}
