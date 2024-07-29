import { Injectable } from '@nestjs/common';
import { CreateStarshipDto } from './dto/create-starship.dto';
import { UpdateStarshipDto } from './dto/update-starship.dto';
import { StarShipsRepository } from './respositories/starships.repository';

@Injectable()
export class StarshipsService {
  constructor(private readonly repository: StarShipsRepository) {}

  create(createStarshipDto: CreateStarshipDto) {
    return this.repository.create(createStarshipDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateStarshipDto: UpdateStarshipDto) {
    return this.repository.update(id, updateStarshipDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
