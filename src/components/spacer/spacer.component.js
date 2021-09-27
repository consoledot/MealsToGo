import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, sizes) =>
  `${positionVariant[position]}: ${sizes[sizeVariant[size]]}`;

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme.space)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
