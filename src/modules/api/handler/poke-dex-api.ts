import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../../poke-dex.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
