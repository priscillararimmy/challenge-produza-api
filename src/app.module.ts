import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PilotsModule } from './pilots/pilots.module';
import { StarshipsModule } from './starships/starships.module';

@Module({
  imports: [ConfigModule.forRoot(), PilotsModule, StarshipsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
