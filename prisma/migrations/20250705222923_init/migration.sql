-- CreateTable
CREATE TABLE "Extension" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "installs" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "keywords" TEXT[],
    "enrichedData" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Extension_pkey" PRIMARY KEY ("id")
);
