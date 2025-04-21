/*
  Warnings:

  - You are about to drop the `campaignmode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orderdetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orderdetailslogs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payoutcurrency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `campaignmode`;

-- DropTable
DROP TABLE `orderdetails`;

-- DropTable
DROP TABLE `orderdetailslogs`;

-- DropTable
DROP TABLE `payoutcurrency`;

-- CreateTable
CREATE TABLE `Campaign_mode` (
    `modeId` INTEGER NOT NULL AUTO_INCREMENT,
    `modeName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`modeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payout_currency` (
    `currencyId` INTEGER NOT NULL AUTO_INCREMENT,
    `currencyName` VARCHAR(191) NOT NULL,
    `currencySymbol` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`currencyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NOT NULL,
    `campaignName` VARCHAR(191) NOT NULL,
    `campaignDesc` VARCHAR(191) NOT NULL,
    `volume` BIGINT NOT NULL,
    `payout` BIGINT NOT NULL,
    `budget` DOUBLE NOT NULL,
    `campaignType` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order_details_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NOT NULL,
    `campaignName` VARCHAR(191) NOT NULL,
    `campaignDesc` VARCHAR(191) NOT NULL,
    `volume` BIGINT NOT NULL,
    `payout` BIGINT NOT NULL,
    `budget` DOUBLE NOT NULL,
    `campaignType` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
