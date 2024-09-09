import { Module } from '@nestjs/common';
import { StreamController } from './api/stream/stream.controller';

@Module({
  imports: [],
  controllers: [StreamController],
  providers: [],
})
export class AppModule {}
