import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground } from "react-native";
import paper from "./paper.jpeg";
import TypeWriter from "react-native-typewriter";
import { Player } from "@react-native-community/audio-toolkit";
import { Background, Title, Container } from "./styles";

export default function Welcome() {
  const [opacity, setOpacity] = useState(0);
  const typeWriterSound = new Player("typewriter.mp3");

  useEffect(() => {
    if (opacity < 1) {
      increaseOpacity();
    } else {
      animateTitle();
    }
  }, [opacity]);

  useEffect(() => {
    new Player("background.mp3").play();
    setTimeout(() => {
      typeWriterSound.play();
      setTimeout(() => {
        typeWriterSound.stop();
      }, 2000);
    }, 1800);
  }, []);

  const animateTitle = () => {};

  const increaseOpacity = () => {
    setTimeout(() => {
      setOpacity(opacity + 0.01);
    }, 5);
  };

  return (
    <Container>
      <Background source={paper} opacity={opacity}>
        <Title>
          {opacity > 0.2 && (
            <TypeWriter typing={1} minDelay={50}>
              try to not explode.
            </TypeWriter>
          )}
        </Title>
      </Background>
    </Container>
  );
}
