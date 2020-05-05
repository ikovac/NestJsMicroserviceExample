import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();





// Communicate with microservice without creating NestJs application
// import { Logger } from "@nestjs/common";
// import { ClientProxyFactory, ClientOptions, Transport } from '@nestjs/microservices';

// const logger = new Logger('Main');

// const microserviceOptions: ClientOptions = {
//   transport: Transport.TCP,
//   options: {
//     port: 8877
//   }
// };

// const client = ClientProxyFactory.create(microserviceOptions);

// client.send<number, number[]>('add', [7, 3])
//   .subscribe(result => {
//     logger.log(`Result is ${result}`);
//   });