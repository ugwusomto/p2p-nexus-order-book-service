import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: "localhost",
      port: 6379,
      retryAttempts: 5,
      retryDelay: 1000,
    }
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  await app.listen();
}
bootstrap();
