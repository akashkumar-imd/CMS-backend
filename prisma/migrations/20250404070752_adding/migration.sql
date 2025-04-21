/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `order_details_logs` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `payout_currency` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `payout_currency` table. All the data in the column will be lost.
  - Added the required column `orderDetailsId` to the `Order_details_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order_details` MODIFY `budget` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `order_details_logs` DROP COLUMN `updatedAt`,
    ADD COLUMN `orderDetailsId` INTEGER NOT NULL,
    MODIFY `budget` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `payout_currency` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- CreateTable
CREATE TABLE `Order_logs` (
    `orderId` INTEGER NOT NULL AUTO_INCREMENT,
    `departmentId` INTEGER NOT NULL,
    `clientId` INTEGER NOT NULL,
    `campaignName` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `payoutCurrency` INTEGER NOT NULL,
    `budget` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
