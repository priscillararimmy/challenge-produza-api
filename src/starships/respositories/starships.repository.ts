import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStarshipDto } from '../dto/create-starship.dto';
import { UpdateStarshipDto } from './../dto/update-starship.dto';
import { StarshipEntity } from '../entities/starship.entity';

@Injectable()
export class StarShipsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createShipDto: CreateStarshipDto): Promise<StarshipEntity> {
    return await this.prisma.starship.create({
      data: createShipDto,
    });
  }

  async findAll(): Promise<StarshipEntity[]> {
    return await this.prisma.starship.findMany();
  }

  async findOne(id: number): Promise<StarshipEntity> {
    return await this.prisma.starship.findUnique({
      where: { id },
    });
  }

  // eslint-disable-next-line prettier/prettier
  async update(id: number, updateStarshipDto: UpdateStarshipDto): Promise<StarshipEntity> {
    return await this.prisma.starship.update({
      where: { id },
      data: updateStarshipDto,
    });
  }

  async remove(id: number): Promise<StarshipEntity> {
    return await this.prisma.starship.delete({
      where: { id },
    });
  }
}
