/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import { Category } from "../models";
export default function TallCard(props) {
  const { drink, overrides, ...rest } = props;
  const tallCardOnClick = useNavigateAction({
    type: "url",
    url: `${"/Product/"}${drink?.id}`,
  });
  const [category, setCategory] = useState(); 
  const getItem = async () => {
    const categories = await DataStore.query(Category, c=>c.id("eq", drink.categoryID))
    if(categories !== undefined)setCategory(categories[0].name)
  }
  useEffect(() => {
    setTimeout(getItem, 500);
  }, []);
  return (
    <Flex
      gap="4px"
      direction="column"
      width="320px"
      height="539px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        tallCardOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "TallCard")}
    >
      <Flex
        gap="18px"
        direction="column"
        height="362px"
        alignItems="center"
        grow="1"
        basis="362px"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 12px 0px 12px"
        {...getOverrideProps(overrides, "ImageBlock")}
      >
        <Image
          width="320px"
          height="357px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src={drink?.image_url}
          {...getOverrideProps(overrides, "image")}
        ></Image>
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
      <Flex
        gap="4px"
        direction="column"
        width="320px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 13px 0px 13px"
        {...getOverrideProps(overrides, "Content")}
      >
        <View
          width="320px"
          height="24px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Icon
            width="24px"
            height="24px"
            position="absolute"
            top="0px"
            left="0px"
            overflow="hidden"
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
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.17px"
            width="37px"
            position="absolute"
            top="0px"
            left="24px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={drink?.rating}
            {...getOverrideProps(overrides, "Rating")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0px"
            width="141px"
            position="absolute"
            top="0px"
            right="28px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={category}
            {...getOverrideProps(overrides, "CategoryType")}
          ></Text>
        </View>
        <Flex
          gap="15px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="7px 0px 7px 0px"
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={drink?.name}
            {...getOverrideProps(overrides, "Name")}
          ></Text>
        </Flex>
        <Flex
          gap="15px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="8px 0px 8px 0px"
          {...getOverrideProps(overrides, "Frame 424")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${drink?.volume}${"L"}`}
            {...getOverrideProps(overrides, "Volume")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${drink?.alcohol}${"%"}`}
            {...getOverrideProps(overrides, "Alcohol")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          justifyContent="flex-end"
          shrink="0"
          position="relative"
          padding="15px 0px 15px 0px"
          {...getOverrideProps(overrides, "Frame 423")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${drink?.price}${"$"}`}
            {...getOverrideProps(overrides, "Price")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
