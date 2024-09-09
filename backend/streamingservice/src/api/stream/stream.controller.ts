import { Controller, Get } from '@nestjs/common';

@Controller('api/stream')
export class StreamController {
  @Get('hit')
  getHit(): { count: number } {
    return { count: 1 };
  }
}
