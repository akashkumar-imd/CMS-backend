/*
  Warnings:

  - You are about to drop the column `campaignType` on the `order_details` table. All the data in the column will be lost.
  - Added the required column `campaignType` to the `Order_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Order_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order_details` DROP COLUMN `campaignType`;

-- AlterTable
ALTER TABLE `order_logs` ADD COLUMN `campaignType` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;
