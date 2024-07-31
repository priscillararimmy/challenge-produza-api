-- CreateTable
CREATE TABLE "pilot" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "pilot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "starship" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "starship_pkey" PRIMARY KEY ("id")
);
