/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cid` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `comapanyName` on the `client` table. All the data in the column will be lost.
  - Added the required column `cId` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` DROP PRIMARY KEY,
    DROP COLUMN `cid`,
    DROP COLUMN `comapanyName`,
    ADD COLUMN `cId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `companyName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`cId`);
