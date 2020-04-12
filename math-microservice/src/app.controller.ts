import { Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  @MessagePattern('add')
  async add(data: number[]): Promise<number> {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.add(data[0], data[1]);
  }
}
