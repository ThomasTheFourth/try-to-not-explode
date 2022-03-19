import { View } from "react-native";
import { useEffect, useState } from "react";

const FadeInContainer = ({
  children,
  speed = 5,
  completeCallback = () => {},
  backgroundColor = "black",
}) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (opacity < 1) {
      increaseOpacity();
    } else if (opacity > 1) {
      setOpacity(1);
    } else {
      completeCallback();
    }
  }, [opacity]);

  const increaseOpacity = () => {
    setTimeout(() => {
      console.log("increasing");
      setOpacity(opacity + 0.01);
    }, speed);
  };

  return <View>{children}</View>;
};

export default FadeInContainer;
