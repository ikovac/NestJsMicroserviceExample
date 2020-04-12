import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class MathService {
  client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 8877
      }
    });
  }

  add(a: number, b: number): Observable<number> {
    return this.client.send<number, number[]>('add', [a, b]);
  }
}
