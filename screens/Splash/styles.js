import styled from "styled-components";
import { Image, View } from "react-native";

export const SplashContainer = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #59606d;
`;

export const SplashImage = styled(Image)`
  flex: 1;
  max-width: 300px;
  resize-mode: contain;
  align-self: center;
`;
