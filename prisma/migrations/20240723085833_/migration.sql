/*
  Warnings:

  - A unique constraint covering the columns `[locationUrl]` on the table `Item` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Item_locationUrl_key` ON `Item`(`locationUrl`);
