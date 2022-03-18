import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground } from "react-native";
import paper from "./paper.jpeg";
import { Background } from "./styles";
import TypeWriter from "react-native-typewriter";
import { Player } from "@react-native-community/audio-toolkit";

new Player("background.mp3").play();
const TYPE_WRITER = new Player("typewriter.mp3");
export default function Welcome() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (opacity < 1) {
      increaseOpacity();
    } else {
      animateTitle();
    }
  }, [opacity]);

  useEffect(() => {
    setTimeout(() => {
      TYPE_WRITER.play();
      setTimeout(() => {
        TYPE_WRITER.stop();
      }, 2000);
    }, 1800);
  }, []);

  const animateTitle = () => {};

  const increaseOpacity = () => {
    setTimeout(() => {
      console.log("increasing", opacity);
      setOpacity(opacity + 0.01);
    }, 5);
  };

  return (
    <View style={{ backgroundColor: "black" }}>
      <ImageBackground
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
          {opacity > 0.2 && (
            <TypeWriter typing={1} minDelay={50}>
              try to not explode.
            </TypeWriter>
          )}
        </Text>
      </ImageBackground>
    </View>
  );
}
