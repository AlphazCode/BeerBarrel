/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const logoOnClick = useNavigateAction({ type: "url", url: "/" });
  const catalogOnClick = useNavigateAction({ type: "url", url: "/Catalog" });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="79px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="0px SOLID rgba(0,0,0,1)"
      padding="2px 21px 2px 21px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="14px"
        direction="row"
        width="79px"
        height="67px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        onClick={() => {
          logoOnClick();
        }}
        {...getOverrideProps(overrides, "Logo")}
      >
        <Image
          width="79px"
          height="67px"
          grow="1"
          basis="79px"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://beerbarrel-storage200920-dev.s3.eu-central-1.amazonaws.com/public/logo.png"
          {...getOverrideProps(overrides, "logo 1")}
        ></Image>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="1109px"
        alignItems="center"
        grow="1"
        basis="1109px"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
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
          children="Catalog"
          onClick={() => {
            catalogOnClick();
          }}
          {...getOverrideProps(overrides, "Catalog")}
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
          children="Contacts"
          {...getOverrideProps(overrides, "Contacts")}
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
          children="About"
          {...getOverrideProps(overrides, "About")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="fit-content"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Sign Up"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Image
          width="45px"
          height="45px"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          src="https://beerbarrel-storage200920-dev.s3.eu-central-1.amazonaws.com/public/picture_profile.png"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
