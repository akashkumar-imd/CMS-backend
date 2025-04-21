-- CreateTable
CREATE TABLE `Creatives` (
    `creativeId` INTEGER NOT NULL AUTO_INCREMENT,
    `orderDetailId` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,
    `creativeName` VARCHAR(191) NOT NULL,
    `creativeSize` VARCHAR(191) NULL,
    `clickURL` VARCHAR(191) NOT NULL,
    `creativeType` VARCHAR(191) NULL,
    `imgPath` VARCHAR(191) NULL,
    `trackingURL` VARCHAR(191) NOT NULL,
    `VideoADtype` VARCHAR(191) NULL,
    `videoPath` VARCHAR(191) NULL,
    `vastTag` VARCHAR(191) NULL,
    `YTCampaignType` VARCHAR(191) NULL,
    `YTVideoLink` VARCHAR(191) NULL,
    `YTWithCompanion` VARCHAR(191) NULL,
    `YTandNativeHeadline` VARCHAR(191) NULL,
    `YTDisplayURL` VARCHAR(191) NULL,
    `YTCallToAction` VARCHAR(191) NULL,
    `YTBanner` VARCHAR(191) NULL,
    `HTMLTag` VARCHAR(191) NULL,
    `NativeDescription` VARCHAR(191) NULL,
    `NativeIconPreviewURL` VARCHAR(191) NULL,
    `NativeCreativePreviewURL` VARCHAR(191) NULL,

    PRIMARY KEY (`creativeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
