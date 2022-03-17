import React from "react";
import splash from "./splash.png";
import { SplashContainer, SplashImage } from "./styles";
import { useNavigate } from "react-router-native";

const Splash = ({}) => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/Welcome");
  }, 3000);

  return (
    <SplashContainer>
      <SplashImage source={splash} />
    </SplashContainer>
  );
};

export default Splash;
