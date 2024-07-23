-- AddForeignKey
ALTER TABLE `Boss_user` ADD CONSTRAINT `Boss_user_bossId_fkey` FOREIGN KEY (`bossId`) REFERENCES `Boss`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_user` ADD CONSTRAINT `Item_user_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
