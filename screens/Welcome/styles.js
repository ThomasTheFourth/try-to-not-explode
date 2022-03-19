import styled from "styled-components";
import { ImageBackground, Text, View } from "react-native";

export const Background = styled(ImageBackground)`
  opacity: ${(props) => props.opacity};
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled(Text)`
  font-family: JMH Typewriter Black;
  font-size: 45px;
  max-width: 300px;
  justify-content: center;
  align-self: center;
  margin-bottom: ${(props) => props.titleBottomMargin}px;
`;

export const Container = styled(View)`
  background-color: black;
`;
