import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { PORT } = process.env;
  app.setGlobalPrefix('api');
  try {
    await app.listen(PORT, () => Logger.log(` Running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
