import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Movie, TV } from "../api";
import Poster from "./Poster";
import Votes from "./Votes";

const Container = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

interface VMediaProps {
  poster_path: string;
  original_title: string;
  vote_average: number;
  fullData: Movie | TV;
}

const VMedia: React.FC<VMediaProps> = ({
  poster_path,
  original_title,
  vote_average,
  fullData,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    //@ts-ignore
    navigation.navigate("Stacks", {
      screen: "Detail",
      params: {
        ...fullData,
      },
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster path={poster_path} />
        <Title>
          {original_title.slice(0, 13)}
          {original_title.length > 13 ? "..." : null}
        </Title>
        <Votes votes={vote_average} />
      </Container>
    </TouchableOpacity>
  );
};

export default VMedia;
