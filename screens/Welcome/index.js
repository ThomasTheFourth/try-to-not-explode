import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import paper from "./paper.jpeg";
import { Background } from "./styles";
import TypeWriter from "react-native-typewriter";

export default function Welcome() {
  const [opacity, setOpacity] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");

  const title = "try not to explode.";

  useEffect(() => {
    if (opacity < 1) {
      increaseOpacity();
    } else {
      animateTitle();
    }
  }, [opacity]);

  const animateTitle = () => {};

  const increaseOpacity = () => {
    setTimeout(() => {
      console.log("increasing", opacity);
      setOpacity(opacity + 0.01);
    }, 5);
  };

  return (
    <View style={{ backgroundColor: "black" }}>
      <Background
        source={paper}
        style={{
          opacity,
          justifyContent: "center",
          alignTtems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "JMH Typewriter Black",
            fontSize: 45,
            maxWidth: 300,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <TypeWriter typing={1} minDelay={50}>
            try to not explode.
          </TypeWriter>
        </Text>
      </Background>
    </View>
  );
}
