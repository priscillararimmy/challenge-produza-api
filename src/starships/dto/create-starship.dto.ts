import { IsString } from 'class-validator';

export class CreateStarshipDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;
}
