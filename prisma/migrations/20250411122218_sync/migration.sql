-- AlterTable
ALTER TABLE `department` MODIFY `departmentId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`departmentId`);

-- DropIndex
DROP INDEX `Department_departmentId_key` ON `department`;
