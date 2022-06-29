/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SideBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="385px"
      alignItems="flex-start"
      position="relative"
      padding="16px 0px 16px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SideBar")}
    >
      <Flex
        gap="0"
        direction="column"
        width="385px"
        grow="1"
        basis="385px"
        height="238.51px"
        position="relative"
        padding="0px 16px 0px 16px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Flex
          gap="32px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="3px 1px 3px 1px"
          {...getOverrideProps(overrides, "11. Chips")}
        >
          <Flex
            gap="6px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Filter by Category32272369")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Filter by category"
              {...getOverrideProps(overrides, "Filter Name32272396")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="8px"
              fontWeight="400"
              color="rgba(132,142,150,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              width="74.09px"
              height="14.25px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="4 chips discovered"
              {...getOverrideProps(overrides, "Chips Discovered32272395")}
            ></Text>
            <Flex
              gap="8px"
              direction="row"
              width="fit-content"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Chips Group32772298")}
            >
              <View
                width="44px"
                height="24px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Unselected Chip32772293")}
              >
                <Flex
                  gap="0"
                  position="absolute"
                  top="0px"
                  left="0px"
                  direction="row"
                  width="44px"
                  height="24px"
                  justifyContent="center"
                  alignItems="center"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 332772294")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="8px"
                    fontWeight="400"
                    color="rgba(0,0,0,1)"
                    lineHeight="24px"
                    textAlign="center"
                    display="flex"
                    direction="column"
                    justifyContent="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Ale"
                    {...getOverrideProps(overrides, "Ale")}
                  ></Text>
                </Flex>
                <View
                  padding="0px 0px 0px 0px"
                  width="44px"
                  height="18px"
                  position="absolute"
                  top="2.83px"
                  left="0px"
                  {...getOverrideProps(overrides, "Group 232772296")}
                >
                  <View
                    width="44px"
                    height="18px"
                    position="absolute"
                    top="0px"
                    left="0px"
                    border="1px SOLID rgba(192,192,192,1)"
                    borderRadius="8px"
                    padding="0px 0px 0px 0px"
                    backgroundColor="rgba(217,217,217,0)"
                    {...getOverrideProps(overrides, "Rectangle 114732772297")}
                  ></View>
                </View>
              </View>
              <View
                width="66px"
                height="24px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Selected Chip32892285")}
              >
                <Flex
                  gap="8px"
                  position="absolute"
                  top="0.75px"
                  left="calc(50% - 30.5px - 0.5px)"
                  direction="row"
                  width="61px"
                  alignItems="center"
                  padding="0px 0px 0px 8px"
                  {...getOverrideProps(overrides, "Frame 332892286")}
                >
                  <Icon
                    width="8.02px"
                    height="6.06px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 8.018798828125,
                      height: 6.064697265625,
                    }}
                    paths={[
                      {
                        d: "M2.64496 4.68307L0.690882 2.72894L0 3.41972L2.64496 6.06464L8.01882 0.690785L7.32788 0L2.64496 4.68307Z",
                        fill: "rgba(10,57,119,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    shrink="0"
                    position="relative"
                    {...getOverrideProps(overrides, "Vector32892287")}
                  ></Icon>
                  <Flex
                    gap="0"
                    direction="row"
                    width="fit-content"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    height="24px"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 332892288")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="8px"
                      fontWeight="400"
                      color="rgba(22,114,236,1)"
                      lineHeight="24px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="flex-start"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="Lager"
                      {...getOverrideProps(overrides, "Lager")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="10px"
                  position="absolute"
                  top="2.75px"
                  left="0px"
                  direction="row"
                  width="63px"
                  alignItems="flex-start"
                  border="1px SOLID rgba(22,114,236,1)"
                  borderRadius="8px"
                  padding="9px 9px 9px 9px"
                  backgroundColor="rgba(217,217,217,0)"
                  {...getOverrideProps(overrides, "Frame 232892290")}
                ></Flex>
              </View>
              <View
                width="44px"
                height="24px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Unselected Chip32772305")}
              >
                <Flex
                  gap="0"
                  position="absolute"
                  top="0px"
                  left="0px"
                  direction="row"
                  width="44px"
                  height="24px"
                  justifyContent="center"
                  alignItems="center"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 332772306")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="8px"
                    fontWeight="400"
                    color="rgba(0,0,0,1)"
                    lineHeight="24px"
                    textAlign="center"
                    display="flex"
                    direction="column"
                    justifyContent="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Cider"
                    {...getOverrideProps(overrides, "Cider")}
                  ></Text>
                </Flex>
                <View
                  padding="0px 0px 0px 0px"
                  width="44px"
                  height="18px"
                  position="absolute"
                  top="2.83px"
                  left="0px"
                  {...getOverrideProps(overrides, "Group 232772308")}
                >
                  <View
                    width="44px"
                    height="18px"
                    position="absolute"
                    top="0px"
                    left="0px"
                    border="1px SOLID rgba(192,192,192,1)"
                    borderRadius="8px"
                    padding="0px 0px 0px 0px"
                    backgroundColor="rgba(217,217,217,0)"
                    {...getOverrideProps(overrides, "Rectangle 114732772309")}
                  ></View>
                </View>
              </View>
              <View
                width="66px"
                height="24px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Selected Chip32892291")}
              >
                <Flex
                  gap="8px"
                  position="absolute"
                  top="0.75px"
                  left="calc(50% - 30.5px - 0.5px)"
                  direction="row"
                  width="61px"
                  alignItems="center"
                  padding="0px 0px 0px 8px"
                  {...getOverrideProps(overrides, "Frame 332892292")}
                >
                  <Icon
                    width="8.02px"
                    height="6.06px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 8.018798828125,
                      height: 6.064697265625,
                    }}
                    paths={[
                      {
                        d: "M2.64496 4.68307L0.690882 2.72894L0 3.41972L2.64496 6.06464L8.01882 0.690785L7.32788 0L2.64496 4.68307Z",
                        fill: "rgba(10,57,119,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    shrink="0"
                    position="relative"
                    {...getOverrideProps(overrides, "Vector32892293")}
                  ></Icon>
                  <Flex
                    gap="0"
                    direction="row"
                    width="fit-content"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    height="24px"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 332892294")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="8px"
                      fontWeight="400"
                      color="rgba(22,114,236,1)"
                      lineHeight="24px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="flex-start"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="Kvass"
                      {...getOverrideProps(overrides, "Kvass")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="10px"
                  position="absolute"
                  top="2.75px"
                  left="0px"
                  direction="row"
                  width="63px"
                  alignItems="flex-start"
                  border="1px SOLID rgba(22,114,236,1)"
                  borderRadius="8px"
                  padding="9px 9px 9px 9px"
                  backgroundColor="rgba(217,217,217,0)"
                  {...getOverrideProps(overrides, "Frame 232892296")}
                ></Flex>
              </View>
            </Flex>
            <Flex
              padding="0px 0px 0px 0px"
              width="58px"
              height="20px"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Select All32792292")}
            >
              <View
                width="58px"
                height="20px"
                position="absolute"
                top="0px"
                left="calc(50% - 29px - 0px)"
                borderRadius="2px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(224,224,224,1)"
                {...getOverrideProps(overrides, "Rectangle 114832792290")}
              ></View>
              <Text
                fontFamily="Inter"
                fontSize="8px"
                fontWeight="400"
                color="rgba(97,97,97,1)"
                lineHeight="24px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="center"
                width="58px"
                height="20px"
                position="absolute"
                top="0px"
                left="calc(50% - 29px - 0px)"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Select All"
                {...getOverrideProps(overrides, "Select All32792291")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="6px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Filter by Category32792293")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Filter by bottle type"
              {...getOverrideProps(overrides, "Filter Name32792294")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="8px"
              fontWeight="400"
              color="rgba(132,142,150,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              width="74.09px"
              height="14.25px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="3 chips discovered"
              {...getOverrideProps(overrides, "Chips Discovered32792295")}
            ></Text>
            <Flex
              gap="8px"
              direction="row"
              width="fit-content"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Chips Group32792296")}
            >
              <View
                width="93px"
                height="24px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Selected Chip32792302")}
              >
                <Flex
                  gap="8px"
                  position="absolute"
                  top="0.33px"
                  left="calc(50% - 46.5px - 0px)"
                  direction="row"
                  width="93px"
                  alignItems="center"
                  padding="0px 0px 0px 8px"
                  {...getOverrideProps(overrides, "Frame 332792303")}
                >
                  <Icon
                    width="8.02px"
                    height="6.06px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 8.018798828125,
                      height: 6.064697265625,
                    }}
                    paths={[
                      {
                        d: "M2.64496 4.68307L0.690882 2.72894L0 3.41972L2.64496 6.06464L8.01882 0.690785L7.32788 0L2.64496 4.68307Z",
                        fill: "rgba(10,57,119,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    shrink="0"
                    position="relative"
                    {...getOverrideProps(overrides, "Vector32792304")}
                  ></Icon>
                  <Flex
                    gap="0"
                    direction="row"
                    width="fit-content"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    height="24px"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 332792305")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="8px"
                      fontWeight="400"
                      color="rgba(22,114,236,1)"
                      lineHeight="24px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="flex-start"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="Plastic Bottle"
                      {...getOverrideProps(overrides, "Plastic Bottle")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="10px"
                  position="absolute"
                  top="2.33px"
                  left="0px"
                  direction="row"
                  width="93px"
                  alignItems="flex-start"
                  border="1px SOLID rgba(22,114,236,1)"
                  borderRadius="8px"
                  padding="9px 9px 9px 9px"
                  backgroundColor="rgba(217,217,217,0)"
                  {...getOverrideProps(overrides, "Frame 232792307")}
                ></Flex>
              </View>
              <View
                width="93px"
                height="24px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Selected Chip32792322")}
              >
                <Flex
                  gap="8px"
                  position="absolute"
                  top="0.33px"
                  left="calc(50% - 46.5px - 0px)"
                  direction="row"
                  width="93px"
                  alignItems="center"
                  padding="0px 0px 0px 8px"
                  {...getOverrideProps(overrides, "Frame 332792323")}
                >
                  <Icon
                    width="8.02px"
                    height="6.06px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 8.018798828125,
                      height: 6.064697265625,
                    }}
                    paths={[
                      {
                        d: "M2.64496 4.68307L0.690882 2.72894L0 3.41972L2.64496 6.06464L8.01882 0.690785L7.32788 0L2.64496 4.68307Z",
                        fill: "rgba(10,57,119,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    shrink="0"
                    position="relative"
                    {...getOverrideProps(overrides, "Vector32792324")}
                  ></Icon>
                  <Flex
                    gap="0"
                    direction="row"
                    width="fit-content"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    height="24px"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 332792325")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="8px"
                      fontWeight="400"
                      color="rgba(22,114,236,1)"
                      lineHeight="24px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="flex-start"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="Glass Bottle"
                      {...getOverrideProps(overrides, "Glass Bottle")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="10px"
                  position="absolute"
                  top="2.33px"
                  left="0px"
                  direction="row"
                  width="93px"
                  alignItems="flex-start"
                  border="1px SOLID rgba(22,114,236,1)"
                  borderRadius="8px"
                  padding="9px 9px 9px 9px"
                  backgroundColor="rgba(217,217,217,0)"
                  {...getOverrideProps(overrides, "Frame 232792327")}
                ></Flex>
              </View>
              <View
                width="44px"
                height="24px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Unselected Chip32792308")}
              >
                <Flex
                  gap="0"
                  position="absolute"
                  top="0px"
                  left="0px"
                  direction="row"
                  width="44px"
                  height="24px"
                  justifyContent="center"
                  alignItems="center"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 332792309")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="8px"
                    fontWeight="400"
                    color="rgba(0,0,0,1)"
                    lineHeight="24px"
                    textAlign="center"
                    display="flex"
                    direction="column"
                    justifyContent="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Can"
                    {...getOverrideProps(overrides, "Can")}
                  ></Text>
                </Flex>
                <View
                  padding="0px 0px 0px 0px"
                  width="44px"
                  height="18px"
                  position="absolute"
                  top="2.83px"
                  left="0px"
                  {...getOverrideProps(overrides, "Group 232792311")}
                >
                  <View
                    width="44px"
                    height="18px"
                    position="absolute"
                    top="0px"
                    left="0px"
                    border="1px SOLID rgba(192,192,192,1)"
                    borderRadius="8px"
                    padding="0px 0px 0px 0px"
                    backgroundColor="rgba(217,217,217,0)"
                    {...getOverrideProps(overrides, "Rectangle 114732792312")}
                  ></View>
                </View>
              </View>
            </Flex>
            <Flex
              padding="0px 0px 0px 0px"
              width="58px"
              height="20px"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Select All32792319")}
            >
              <View
                width="58px"
                height="20px"
                position="absolute"
                top="0px"
                left="calc(50% - 29px - 0px)"
                borderRadius="2px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(224,224,224,1)"
                {...getOverrideProps(overrides, "Rectangle 114832792320")}
              ></View>
              <Text
                fontFamily="Inter"
                fontSize="8px"
                fontWeight="400"
                color="rgba(97,97,97,1)"
                lineHeight="24px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="center"
                width="58px"
                height="20px"
                position="absolute"
                top="0px"
                left="calc(50% - 29px - 0px)"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Select All"
                {...getOverrideProps(overrides, "Select All32792321")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
