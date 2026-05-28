import { CLOUDINARY_CLOUD_NAME } from "@/constants";
import {
  format,
  quality,
  dpr,
} from "@cloudinary/transformation-builder-sdk/actions/delivery";
import { fill } from "@cloudinary/transformation-builder-sdk/actions/resize";
import { TextStyle } from "@cloudinary/transformation-builder-sdk/qualifiers/textStyle";
import { Cloudinary } from "@cloudinary/url-gen";
import { text } from "@cloudinary/transformation-builder-sdk/qualifiers/source";
import { source } from "@cloudinary/transformation-builder-sdk/actions/underlay";
import { Position } from "@cloudinary/transformation-builder-sdk/qualifiers/position";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";

const cld = new Cloudinary({
  cloud: {
    cloudName: CLOUDINARY_CLOUD_NAME,
  },
});

export const bannerPhoto = (imageCldPubId: string, name: string) => {
  console.log("Banner name : ", name);
  return cld
    .image(imageCldPubId)
    .resize(fill())
    .delivery(format("auto"))
    .delivery(quality("auto"))
    .delivery(dpr("auto"))
    .overlay(
      source(
        text(name, new TextStyle("roboto", 100).fontWeight("bold")).textColor(
          "white",
        ),
      ).position(new Position().gravity(compass("south_west")).offsetX(0.02)),
    );
};
