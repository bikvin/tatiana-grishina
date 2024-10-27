/*
  Warnings:

  - You are about to drop the `AccordionItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AccordionItem";

-- CreateTable
CREATE TABLE "Help" (
    "id" TEXT NOT NULL,
    "header" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Help_pkey" PRIMARY KEY ("id")
);
