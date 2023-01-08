import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Detail = ({
  navigation: { setOptions },
  route: {
    params: { original_title },
  },
}) => {
  useEffect(() => {
    setOptions({
      title: original_title,
    });
  }, []);
  return (
    <Container>
      <Text>Detail</Text>
    </Container>
  );
};
export default Detail;
