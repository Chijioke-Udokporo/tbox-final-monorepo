import styled from "styled-components/native";
import { Typo } from "../../components/typo";
import { type Trailers } from "@/app";

import dayjs from "dayjs";
import { Constants } from "@/src/utils/constants";
import { useEffect } from "react";
import TrailerPoster from "./trailer-poster";

export const Image = styled.Image`
  width: 100%;
  height: 250px;
  background-color: ${Constants.Colors.dark.base_200};
  background-size: contain;
`;

const Container = styled.View`
  padding-horizontal: ${Constants.Padding.horizontal}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const Box = styled.View`
  overflow: hidden;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 47%;
  margin-bottom: 20px;
`;

const Wrap = styled.View`
  margin-top: 10px;
  gap: 2px;
`;

export const TrailerItem = ({ trailers }: { trailers: Trailers }) => {
  return (
    <Container>
      {trailers.map((trailer) => (
        <Box key={trailer.id}>
          {/*  <Image source={{ uri: Constants.imageUrl(trailer.poster || "") }} /> */}
          <TrailerPoster uri={Constants.imageUrl(trailer.poster || "")} />

          <Wrap>
            <Typo size="sm" weight="semibold">
              {trailer.title}
            </Typo>
            <Typo size="xs" weight="light" color={Constants?.Colors?.dark.secondary}>
              {dayjs(trailer?.releaseDate).format("MMMM DD, YYYY")}
            </Typo>
          </Wrap>
        </Box>
      ))}
    </Container>
  );
};
