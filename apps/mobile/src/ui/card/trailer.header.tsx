import { Avatar, Typo } from "@/src/components";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View``;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const TrailerHeader = () => {
  return (
    <Wrapper>
      <SafeAreaView />
      <Container>
        <View>
          <Typo size="sm" weight="light">
            Welcome!
          </Typo>
          <Typo size="xl" weight="bold">
            Guest
          </Typo>
        </View>

        <View>
          <Avatar />
        </View>
      </Container>
    </Wrapper>
  );
};
