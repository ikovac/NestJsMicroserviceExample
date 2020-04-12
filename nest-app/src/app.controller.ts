import { Controller, Get, Post, Logger, Body } from '@nestjs/common';
import { MathService } from './math.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly mathService: MathService) { }

  @Post('add')
  add(@Body('data') data: number[]): Observable<number> {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.add(data[0], data[1]);
  }
}
