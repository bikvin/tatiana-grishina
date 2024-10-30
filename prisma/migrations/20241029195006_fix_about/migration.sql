/*
  Warnings:

  - A unique constraint covering the columns `[squareNumber]` on the table `About` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "About_squareNumber_key" ON "About"("squareNumber");
