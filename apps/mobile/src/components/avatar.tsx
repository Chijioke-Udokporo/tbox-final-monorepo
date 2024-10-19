import styled from "styled-components/native";
import { Constants } from "../utils/constants";

const Image = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background-color: ${Constants.Colors.dark.base_200};
  margin-bottom: 10px;
`;

export const Avatar = ({ uri }: { uri?: string }) => {
  return <Image source={{ uri }} />;
};
