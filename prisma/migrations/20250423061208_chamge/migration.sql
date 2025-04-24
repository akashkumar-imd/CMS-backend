/*
  Warnings:

  - You are about to drop the column `orderDetailId` on the `creatives` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `Creatives` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `creatives` DROP COLUMN `orderDetailId`,
    ADD COLUMN `orderId` INTEGER NOT NULL,
    MODIFY `status` VARCHAR(191) NOT NULL;
