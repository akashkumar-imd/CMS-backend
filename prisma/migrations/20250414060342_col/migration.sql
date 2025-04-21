/*
  Warnings:

  - You are about to drop the column `creativeType` on the `creative_size` table. All the data in the column will be lost.
  - Added the required column `campaignType` to the `Creative_size` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `creative_size` DROP COLUMN `creativeType`,
    ADD COLUMN `campaignType` VARCHAR(191) NOT NULL;
