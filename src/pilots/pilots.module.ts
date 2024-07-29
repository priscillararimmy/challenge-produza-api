import { Module } from '@nestjs/common';
import { PilotsService } from './pilots.service';
import { PilotsController } from './pilots.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PilotsRepository } from './repositories/pilots.repository';

@Module({
  controllers: [PilotsController],
  providers: [PilotsService, PrismaService, PilotsRepository],
})
export class PilotsModule {}
