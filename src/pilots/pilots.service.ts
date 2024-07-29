import { Injectable } from '@nestjs/common';
import { CreatePilotDto } from './dto/create-pilot.dto';
import { UpdatePilotDto } from './dto/update-pilot.dto';
import { PilotsRepository } from './repositories/pilots.repository';

@Injectable()
export class PilotsService {
  constructor(private readonly repository: PilotsRepository) {}

  create(createPilotDto: CreatePilotDto) {
    return this.repository.create(createPilotDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updatePilotDto: UpdatePilotDto) {
    return this.repository.update(id, updatePilotDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
