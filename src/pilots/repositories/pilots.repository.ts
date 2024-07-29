import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePilotDto } from '../dto/create-pilot.dto';
import { UpdatePilotDto } from '../dto/update-pilot.dto';
import { PilotEntity } from '../entities/pilot.entity';

@Injectable()
export class PilotsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPilotDto: CreatePilotDto): Promise<PilotEntity> {
    return await this.prisma.pilot.create({
      data: createPilotDto,
    });
  }

  async findAll(): Promise<PilotEntity[]> {
    return await this.prisma.pilot.findMany();
  }

  async findOne(id: number): Promise<PilotEntity> {
    return await this.prisma.pilot.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updatePilotDto: UpdatePilotDto,
  ): Promise<PilotEntity> {
    return await this.prisma.pilot.update({
      where: { id },
      data: updatePilotDto,
    });
  }

  async remove(id: number): Promise<PilotEntity> {
    return await this.prisma.pilot.delete({
      where: { id },
    });
  }
}
