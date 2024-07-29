import { Module } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { StarshipsController } from './starships.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { StarShipsRepository } from './respositories/starships.repository';

@Module({
  controllers: [StarshipsController],
  providers: [StarshipsService, PrismaService, StarShipsRepository],
})
export class StarshipsModule {}
