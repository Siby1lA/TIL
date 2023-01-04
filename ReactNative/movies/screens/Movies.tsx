import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { makeImgPath } from "../utils";
import { BlurView } from "@react-native-community/blur";
const API_KEY = "454f597cdee2f722480c9fda4efff275";

const Container = styled.ScrollView``;

const View = styled.View`
  flex: 1;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BgImg = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Poster = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Column = styled.View`
  width: 40%;
  margin-left: 15px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
`;

const Votes = styled(Overview)`
  font-size: 12px;
`;

const { height: SCREEN_HEIGH } = Dimensions.get("window");

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const isDark = useColorScheme() === "dark";
  const [loading, setLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
      )
    ).json();
    setNowPlayingMovies(results);
    setLoading(false);
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
  return loading ? (
    <Loader>
      <ActivityIndicator size="small" />
    </Loader>
  ) : (
    <Container>
      <Swiper
        horizontal
        showsButtons={false}
        loop
        autoplay
        autoplayTimeout={3.5}
        showsPagination={false}
        containerStyle={{ width: "100%", height: SCREEN_HEIGH / 4 }}
      >
        {nowPlayingMovies.map((movie) => (
          <View key={movie.id}>
            <BgImg
              style={StyleSheet.absoluteFill}
              source={{ uri: makeImgPath(movie.backdrop_path) }}
            />
            <BlurView
              tint={isDark ? "dark" : "light"}
              intensity={85}
              style={StyleSheet.absoluteFill}
            >
              <Wrapper>
                <Poster
                  source={{ uri: makeImgPath(movie.poster_path) }}
                ></Poster>
                <Column>
                  <Title>{movie.original_title}</Title>
                  {movie.vote_average > 0 ? (
                    <Votes>⭐️{movie.vote_average}/10</Votes>
                  ) : null}
                  <Overview>{movie.overview.slice(0, 90)}...</Overview>
                </Column>
              </Wrapper>
            </BlurView>
          </View>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
