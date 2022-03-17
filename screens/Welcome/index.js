import React from "react";
import { Text } from "react-native";
import paper from "./paper.jpeg";
import { Background } from "./styles";

export default function Welcome() {
  return (
    <>
      <Background
        source={paper}
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignTtems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 60,
            maxWidth: 300,
            resizeMode: "contain",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          try not to explode.
        </Text>
      </Background>
    </>
  );
}
