-- CreateTable
CREATE TABLE `Creative_size` (
    `creativeSizeId` INTEGER NOT NULL AUTO_INCREMENT,
    `creativeSize` VARCHAR(191) NOT NULL,
    `creativeType` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`creativeSizeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
