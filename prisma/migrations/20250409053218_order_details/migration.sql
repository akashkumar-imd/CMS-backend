/*
  Warnings:

  - You are about to drop the column `status` on the `campaign_type` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `campaign_type` DROP COLUMN `status`,
    ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `order_details` MODIFY `volume` DECIMAL(65, 30) NOT NULL,
    MODIFY `payout` DECIMAL(65, 30) NOT NULL;
