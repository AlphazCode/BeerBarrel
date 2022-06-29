/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ProfileCard(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <Flex
      gap="14px"
      direction="column"
      height="417px"
      alignItems="center"
      position="relative"
      padding="14px 21px 14px 21px"
      backgroundColor="rgba(218,218,218,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProfileCard")}
    >
      <Flex
        gap="14px"
        direction="column"
        height="389px"
        alignItems="center"
        grow="1"
        basis="389px"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="180px"
          height="180px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="15px 15px 15px 15px"
          {...getOverrideProps(overrides, "Frame 430")}
        >
          <Image
            width="150px"
            height="150px"
            grow="1"
            basis="150px"
            alignSelf="stretch"
            position="relative"
            borderRadius="12px"
            padding="0px 0px 0px 0px"
            src="https://beerbarrel-storage200920-dev.s3.eu-central-1.amazonaws.com/public/logo.png"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Name")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 432")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="25px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={authAttributes["name"]}
              {...getOverrideProps(overrides, "name")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="25px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={authAttributes["family_name"]}
              {...getOverrideProps(overrides, "surname")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={authAttributes["email"]}
            {...getOverrideProps(overrides, "email")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="254px"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 40px 0px 40px"
          {...getOverrideProps(overrides, "Cart32352290")}
        >
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="shopping_bag"
            {...getOverrideProps(overrides, "MyIcon32352293")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cart"
            {...getOverrideProps(overrides, "Cart32352291")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="254px"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 40px 0px 40px"
          {...getOverrideProps(overrides, "Followed")}
        >
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="checkmark"
            {...getOverrideProps(overrides, "MyIcon32352301")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Followed"
            {...getOverrideProps(overrides, "Cart32352297")}
          ></Text>
        </Flex>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="254px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Sign Out"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
