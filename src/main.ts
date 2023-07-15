import { NestFactory } from '@nestjs/core';
import { PodeDexApiModule } from './modules/api/poke-dex-api.module';

async function bootstrap() {
  const app = await NestFactory.create(PodeDexApiModule);
  await app.listen(3000);
}
bootstrap();
