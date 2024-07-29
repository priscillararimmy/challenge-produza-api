import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PilotsModule } from './pilots/pilots.module';

@Module({
  imports: [ConfigModule.forRoot(), PilotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
