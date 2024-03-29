/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Category, Drink } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type TallCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    drink?: Drink;
    category?: Category;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function TallCard(props: TallCardProps): React.ReactElement;
