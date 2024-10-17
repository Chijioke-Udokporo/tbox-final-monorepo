import { ButtonProps, Pressable } from "react-native";
import styled from "styled-components/native";
import { Typo } from "./typo";
import { Constants } from "../utils/constants";

interface IButtonStyleProps {
  width?: "100%" | "60%" | "none";
}

const ButtonStyle = styled(Pressable)<IButtonStyleProps>`
  background-color: ${Constants.Colors.light.accent};
  padding: 16px;
  height: 50px;
  border-radius: 5px;
  width: ${({ width }) => width || "100%"};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Typo)`
  color: ${Constants.Colors.light.accent_content};
`;

interface IButtonProps extends ButtonProps {
  title: string;
  width?: IButtonStyleProps["width"];
}

export const Button = ({ title, width, ...props }: IButtonProps) => {
  return (
    <ButtonStyle width={width}>
      <ButtonText weight="bold">{title}</ButtonText>
    </ButtonStyle>
  );
};
