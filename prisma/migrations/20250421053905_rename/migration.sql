/*
  Warnings:

  - You are about to drop the `campaign_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `campaign_type`;

-- CreateTable
CREATE TABLE `Creative_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
