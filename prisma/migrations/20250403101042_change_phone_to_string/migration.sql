/*
  Warnings:

  - Made the column `mobile` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `mobile` VARCHAR(191) NOT NULL,
    MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED') NOT NULL DEFAULT 'INACTIVE';
