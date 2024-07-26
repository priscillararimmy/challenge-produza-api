-- CreateTable
CREATE TABLE "pilot" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "imgURL" TEXT NOT NULL,

    CONSTRAINT "pilot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "starship" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "imgURL" TEXT NOT NULL,
    "pilotId" INTEGER,

    CONSTRAINT "starship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "starship" ADD CONSTRAINT "starship_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "pilot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
