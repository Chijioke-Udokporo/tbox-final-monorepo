import { Text, TextProps } from "react-native";
import styled from "styled-components/native";

export const fontWeight = {
  bold: "700",
  semibold: "600",
  medium: "500",
  regular: "400",
  light: "300",
};

export const fontSize = {
  xs: "12rem",
  sm: "14rem",
  md: "16rem",
  lg: "18rem",
  xl: "20rem",
  "2xl": "24rem",
  "3xl": "32rem",
  "4xl": "48rem",
  "5xl": "64rem",
};

interface TypoProps extends TextProps {
  size?: keyof typeof fontSize;
  weight?: keyof typeof fontWeight;
  color?: string;
}

export const Typo = styled(Text)<TypoProps>`
  font-size: ${({ size }) => fontSize[size as keyof typeof fontSize] || fontSize.md};
  font-weight: ${({ weight }) => fontWeight[weight as keyof typeof fontWeight] || fontWeight.regular};
  color: ${({ color }) => color || "#000"};
`;
