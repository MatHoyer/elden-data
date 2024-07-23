/*
  Warnings:

  - A unique constraint covering the columns `[locationUrl]` on the table `Boss` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Boss_locationUrl_key` ON `Boss`(`locationUrl`);
