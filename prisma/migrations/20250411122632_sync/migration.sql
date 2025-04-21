/*
  Warnings:

  - Added the required column `campaignType` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `campaignType` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;
