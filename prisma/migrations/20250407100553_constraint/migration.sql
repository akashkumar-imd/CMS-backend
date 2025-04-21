/*
  Warnings:

  - You are about to drop the column `orderDetailId` on the `order_details_logs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `payoutCurrency` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `order_details_logs` DROP COLUMN `orderDetailId`;

-- AlterTable
ALTER TABLE `order_logs` MODIFY `startDate` VARCHAR(191) NOT NULL,
    MODIFY `endDate` VARCHAR(191) NOT NULL,
    MODIFY `payoutCurrency` VARCHAR(191) NOT NULL;
