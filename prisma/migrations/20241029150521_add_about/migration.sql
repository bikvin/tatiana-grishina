-- CreateTable
CREATE TABLE "About" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "squareNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);
