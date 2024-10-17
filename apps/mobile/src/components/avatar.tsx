import styled from "styled-components/native";

const Image = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background-color: #d0d0d0;
  margin-bottom: 10px;
`;

export const Avatar = ({ uri }: { uri?: string }) => {
  return <Image source={{ uri }} />;
};
