-- AlterTable
ALTER TABLE `item` ADD COLUMN `armorSetId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ArmorSet` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `inDlc` BOOLEAN NOT NULL DEFAULT false,
    `imageUrl` VARCHAR(191) NOT NULL,
    `wikiUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ArmorSet_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArmorSet_user` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `armorSetId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ArmorSet_user_userId_armorSetId_key`(`userId`, `armorSetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_armorSetId_fkey` FOREIGN KEY (`armorSetId`) REFERENCES `ArmorSet`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArmorSet_user` ADD CONSTRAINT `ArmorSet_user_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArmorSet_user` ADD CONSTRAINT `ArmorSet_user_armorSetId_fkey` FOREIGN KEY (`armorSetId`) REFERENCES `ArmorSet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
