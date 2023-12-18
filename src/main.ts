import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // it helps to filter unnecessary fields in the API.
    transform: true,
    forbidNonWhitelisted: true,
  }));
  await app.listen(4000);
}
bootstrap();
