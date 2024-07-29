import { Starship } from '@prisma/client';

export class StarshipEntity implements Starship {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
