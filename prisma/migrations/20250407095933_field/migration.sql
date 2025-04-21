/*
  Warnings:

  - The primary key for the `order_logs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `orderDetailId` to the `Order_details_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Order_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `startDate` VARCHAR(191) NOT NULL,
    MODIFY `endDate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `order_details_logs` ADD COLUMN `orderDetailId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `order_logs` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `orderId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);
