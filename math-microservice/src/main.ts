import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

const logger = new Logger('Main');

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: process.env.HOST,
    port: 8001
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, microserviceOptions);
  await app.listen(() => {
    logger.log('Microservice is listening...');
  });
}

bootstrap();
