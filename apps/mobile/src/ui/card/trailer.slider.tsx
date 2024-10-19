import { Trailers } from "@/app";
import { Typo } from "@/src/components";
import { Constants } from "@/src/utils/constants";
import { ScrollView, Dimensions } from "react-native";
import styled from "styled-components/native";
const { width } = Dimensions.get("window");

const MainContainer = styled.View`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 30px;
  margin-top: 10px;
  flex-direction: row;
`;

const Container = styled.View`
  flex-direction: row;
  width: ${width}px;
  height: 220px;
  padding-horizontal: ${Constants.Padding.horizontal}px;
`;

const ImageBackground = styled.ImageBackground`
  background-color: #d0d0d0;
  background-size: contain;
  width: 100%;
`;

const Wrap = styled.View``;

export const TrailerSlider = ({ trailers }: { trailers: Trailers }) => {
  return (
    <MainContainer>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} pagingEnabled={true} style={{ flexGrow: 1 }}>
        {trailers?.map((trailer) => (
          <Container key={trailer?.id}>
            <ImageBackground source={{ uri: Constants.imageUrl(trailer?.poster || "") }}>
              <Typo size="sm" weight="semibold">
                {trailer?.title}
              </Typo>
            </ImageBackground>
          </Container>
        ))}
      </ScrollView>
    </MainContainer>
  );
};
