import { Pilot } from '@prisma/client';

export class PilotEntity implements Pilot {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
