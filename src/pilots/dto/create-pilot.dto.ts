import { IsString } from 'class-validator';

export class CreatePilotDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;
}
