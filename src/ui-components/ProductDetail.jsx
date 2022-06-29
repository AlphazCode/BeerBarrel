/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProductDetail(props) {
  const { drink, category, packageType, overrides, ...rest } = props;
  return (
    <Flex
      gap="15px"
      direction="row"
      width="1050px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(155,155,155,1)"
      padding="2px 10px 2px 10px"
      {...rest}
      {...getOverrideProps(overrides, "ProductDetail")}
    >
      <Flex
        gap="0"
        direction="row"
        width="fit-content"
        height="610px"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 401")}
      >
        <Flex
          gap="39px"
          direction="row"
          width="fit-content"
          height="610px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="22px 25px 22px 25px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 431")}
        >
          <Image
            width="311px"
            height="434px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            src={drink?.image_url}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        height="610px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 435")}
      >
        <View
          width="3px"
          height="610px"
          grow="1"
          basis="610px"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(139,139,139,1)"
          {...getOverrideProps(overrides, "Rectangle 1146")}
        ></View>
      </Flex>
      <Flex
        gap="21px"
        direction="column"
        width="595px"
        grow="1"
        basis="595px"
        height="610px"
        position="relative"
        padding="23px 7px 6px 7px"
        {...getOverrideProps(overrides, "Frame 402")}
      >
        <Flex
          gap="9px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 27")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="fit-content"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rating32052397")}
          >
            <Icon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
              paths={[
                {
                  d: "M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                  style: { transform: "translate(8.33%, 12.5%)" },
                },
              ]}
              type="star"
              fontSize="24px"
              {...getOverrideProps(overrides, "RatingIcon")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="548px"
            height="24px"
            grow="1"
            basis="548px"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={drink?.rating}
            {...getOverrideProps(overrides, "Rating29766970")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={category?.name}
          {...getOverrideProps(overrides, "CategoryType")}
        ></Text>
        <Flex
          gap="79px"
          direction="row"
          width="299px"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 2px 0px 2px"
          {...getOverrideProps(overrides, "Frame 426")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="30px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 1")}
          >
            <Text
              fontFamily="Inter"
              fontSize="22px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={drink?.volume}
              {...getOverrideProps(overrides, "Volume")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="22px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="L"
              {...getOverrideProps(overrides, "L")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="401px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={packageType?.name}
            {...getOverrideProps(overrides, "PackageType")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 424")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="300"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={drink?.alcohol}
            {...getOverrideProps(overrides, "Alcohol")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="300"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="% ABV"
            {...getOverrideProps(overrides, "% ABV")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="$192"
          {...getOverrideProps(overrides, "Price")}
        ></Text>
        <Icon
          width="581px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 581, height: 1 }}
          paths={[
            {
              d: "M0 0L581 0L581 -1L0 -1L0 0Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
        <Flex
          gap="32px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 6")}
        >
          <Flex
            gap="8px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 7")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={drink?.name}
              {...getOverrideProps(overrides, "Name")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={drink?.description}
              {...getOverrideProps(overrides, "Description")}
            ></Text>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
        </Flex>
      </Flex>
    </Flex>
  );
}
