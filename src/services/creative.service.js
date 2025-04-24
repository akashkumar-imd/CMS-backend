import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCreative = async (orderId) => {
  try {
    let allCreative
    if (orderId) {
      allCreative= await prisma.creatives.findMany({
        where: {
          orderId: Number(orderId),
        },
      });
    }else{
      allCreative = await prisma.creatives.findMany();
    }

    return allCreative;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

const createCreative = async (
  orderId,
  status,
  creativeName,
  creativeSize,
  clickURL,
  creativeType,
  imgPath,
  trackingURL,
  VideoADtype,
  videoPath,
  vastTag,
  YTCampaignType,
  YTVideoLink,
  YTWithCompanion,
  YTandNativeHeadline,
  YTDisplayURL,
  YTCallToAction,
  YTBanner,
  HTMLTag,
  NativeDescription,
  NativeIconPreviewURL,
  NativeCreativePreviewURL,
) => {
  try {
    const newCreative = await prisma.creatives.create({
      data: {
        orderId: orderId,
        status: status ? status : "ACTIVE",
        creativeName: creativeName,
        creativeSize: creativeSize ? creativeSize : "-",
        clickURL: clickURL,
        creativeType: creativeType ? creativeType : "-",
        imgPath: imgPath ? imgPath : "-",
        trackingURL: trackingURL,
        VideoADtype: VideoADtype ? VideoADtype : "-",
        videoPath: videoPath ? videoPath : "-",
        vastTag: vastTag ? vastTag : "-",
        YTCampaignType: YTCampaignType ? YTCampaignType : "-",
        YTVideoLink: YTVideoLink ? YTVideoLink : "-",
        YTWithCompanion: YTWithCompanion ? YTWithCompanion : "-",
        YTandNativeHeadline: YTandNativeHeadline ? YTandNativeHeadline : "-",
        YTDisplayURL: YTDisplayURL ? YTDisplayURL : "-",
        YTCallToAction: YTCallToAction ? YTCallToAction : "-",
        YTBanner: YTBanner ? YTBanner : "-",
        HTMLTag: HTMLTag ? HTMLTag : "-",
        NativeDescription: NativeDescription ? NativeDescription : "-",
        NativeIconPreviewURL: NativeIconPreviewURL ? NativeIconPreviewURL : "-",
        NativeCreativePreviewURL: NativeCreativePreviewURL
          ? NativeCreativePreviewURL
          : "-",
      },
    });

    return newCreative;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export { createCreative, getAllCreative };
