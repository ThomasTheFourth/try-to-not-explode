import React from "react";
import { Text } from "react-native";
import rippedPaper from "./ripped-paper.png";
import { TouchableOpacity } from "react-native";
import { Background, Title } from "./styles";

export default function RippedPaperButton({ text, size = 45, clickCallback }) {
  return (
    <TouchableOpacity onClick={clickCallback}>
      <Background source={rippedPaper} resizeMode={"stretch"} style={{}}>
        <Title size={size}>{text}</Title>
      </Background>
    </TouchableOpacity>
  );
}
