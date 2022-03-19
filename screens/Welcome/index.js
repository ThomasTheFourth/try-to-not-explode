import React, { useState, useEffect } from "react";
import paper from "./paper.jpeg";
import TypeWriter from "react-native-typewriter";
import { Player } from "@react-native-community/audio-toolkit";
import { Background, Title, Container } from "./styles";
import RippedPaperButton from "../../components/RippedPaperButton";
import { View } from "react-native";

const typeWriterSound = new Player("typewriter.mp3");

export default function Welcome() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [buttonOpacity, setButtonOpacity] = useState(0);
  const [titleDisplayed, setTitleDisplayed] = useState(false);
  const [titleBottomMargin, setTitleBottomMargin] = useState(0);
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    if (backgroundOpacity < 1) {
      increaseBackgroundOpacity();
    } else {
      setTimeout(() => {
        typeWriterSound.play();
      }, 200);
    }
  }, [backgroundOpacity]);

  useEffect(() => {
    if (titleDisplayed) {
      typeWriterSound.stop();
      setTimeout(() => {
        increaseTitleBottomMargin();
        setDisplayButton(true);
      }, 1000);
    }
  }, [titleDisplayed]);

  useEffect(() => {
    if (titleBottomMargin < 55 && titleDisplayed) increaseTitleBottomMargin();
  }, [titleBottomMargin]);

  const increaseButtonOpacity = () => {
    setTimeout(() => {
      setButtonOpacity(buttonOpacity + 0.04);
    }, 5);
  };

  useEffect(() => {
    if (displayButton && buttonOpacity < 1) {
      increaseButtonOpacity();
    }
  }, [buttonOpacity]);

  useEffect(() => {
    if (displayButton) {
      new Player("paper-rip.mp3").play();
      increaseButtonOpacity();
    }
  }, [displayButton]);

  useEffect(() => {
    new Player("background.mp3").play();
  }, []);

  const increaseBackgroundOpacity = () => {
    setTimeout(() => {
      setBackgroundOpacity(backgroundOpacity + 0.01);
    }, 5);
  };

  const increaseTitleBottomMargin = () => {
    setTimeout(() => {
      setTitleBottomMargin(titleBottomMargin + 3);
    }, 5);
  };

  return (
    <Container>
      <Background source={paper} opacity={backgroundOpacity}>
        <Title titleBottomMargin={titleBottomMargin}>
          {backgroundOpacity >= 1 && (
            <TypeWriter
              onTypingEnd={() => setTitleDisplayed(true)}
              typing={1}
              minDelay={50}
            >
              try to not explode.
            </TypeWriter>
          )}
        </Title>
        <View style={{ opacity: buttonOpacity }}>
          <RippedPaperButton size={40} text={"PLAY"} />
        </View>
      </Background>
    </Container>
  );
}
