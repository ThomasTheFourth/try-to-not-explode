import { ImageBackground, Text } from "react-native";
import styled from "styled-components";

export const Background = styled(ImageBackground)`
  margin-right: auto;
  margin-left: auto;
  background-color: rgba(0, 0, 0, 0);
`;

export const Title = styled(Text)`
  margin-left: 10px;
  margin-right: 10px;
  font-family: JMH Typewriter Black;
  font-size: ${(props) => props.size}px;
`;
