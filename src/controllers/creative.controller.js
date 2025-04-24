import {
  getAllCreativeSizes,
  createCreativeSize,
} from "../services/creativeSize.service.js";
import { messageLogs } from "../utils/message.js";
import {
  checkCreativeSizePayloadValidation,
  checkCreativeTypePayloadValidation,
  checkCreativePayloadValidation
} from "../utils/common.js";
import {
  createNewCreativeType,
  getCreativeType,
} from "../services/creativeType.service.js";
import { 
  getAllCreative,
  createCreative 
} from "../services/creative.service.js";

// CreativeSizes Creation 
const createCreativeSizes = async (req, res) => {
  const { creativeSize, campaignType } = req.body;

  try {
    const errorValidation = checkCreativeSizePayloadValidation(
      creativeSize,
      campaignType
    );

    if (errorValidation) {
      return res
        .status(errorValidation.status)
        .json({
          statusCode: errorValidation.status,
          message: errorValidation.message,
        });
    }

    const newCreativeSize = await createCreativeSize(
      creativeSize,
      campaignType
    );

    return res.status(201).json({
      statusCode: 201,
      message: messageLogs.CREATE_CREATIVE_SIZE,
      departmentId: newCreativeSize.creativeSizeId,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

//get all creative size details
const getAllCreativeSize = async (req, res) => {
  try {
    const creativeSize = await getAllCreativeSizes();

    return res
      .status(200)
      .json({
        statusCode: 200,
        message: messageLogs.ALL_CREATIVE_SIZES,
        result: creativeSize,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

// CreativeType Creation 
const createCreativeType = async (req, res) => {
  const { creativeType, active } = req.body;
  console.log(creativeType, active);

  try {
    const errorValidation = checkCreativeTypePayloadValidation(
      creativeType,
      active
    );
    if (errorValidation) {
      return res
        .status(errorValidation.status)
        .json({
          statusCode: errorValidation.status,
          message: errorValidation.message,
        });
    }

    let updatedActiveValue;
    if (active == "ACTIVE") {
      updatedActiveValue = true;
    } else {
      updatedActiveValue = false;
    }
    const newCreativeSize = await createNewCreativeType(
      creativeType,
      updatedActiveValue
    );

    return res.status(201).json({
      statusCode: 201,
      message: messageLogs.CREATE_CREATIVE_TYPE,
      departmentId: newCreativeSize.id,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

//get all creative type details
const getAllCreativeType = async (req, res) => {
  try {
    const creativeType = await getCreativeType();

    return res
      .status(200)
      .json({
        statusCode: 200,
        message: messageLogs.ALL_CREATIVE_SIZES,
        result: creativeType,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

//get all creative
const getAllCreatives = async (req, res) => {
  const { orderId } = req.query;
  try {
    const creative = await getAllCreative(orderId);

    return res
      .status(200)
      .json({
        statusCode: 200,
        message: messageLogs.ALL_CREATIVE,
        orderId: Number(orderId),
        result: creative,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

// Creative Creation 
const createCreatives = async (req, res) => {
  const { 
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
    NativeCreativePreviewURL 
  } = req.body;

  try {
    const errorValidation = checkCreativePayloadValidation(orderId,creativeName,clickURL,trackingURL);

    if (errorValidation) {
      return res
        .status(errorValidation.status)
        .json({
          statusCode: errorValidation.status,
          message: errorValidation.message,
        });
    }

    const newCreative = await createCreative(
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
    );

    return res.status(201).json({
      statusCode: 201,
      message: messageLogs.CREATE_CREATIVE,
      departmentId: newCreative.creativeId,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

export {
  createCreativeSizes,
  getAllCreativeSize,
  createCreativeType,
  getAllCreativeType,
  getAllCreatives,
  createCreatives
};
