import React from "react";
import {
  NativeRouter,
  Routes,
  Route,
  NativeHistory,
} from "react-router-native";
import Splash from "./screens/Splash";
import Welcome from "./screens/Welcome";

export default function App() {
  console.log(NativeHistory);
  return (
    <NativeRouter history={NativeHistory}>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/welcome" element={<Welcome />} />
      </Routes>
    </NativeRouter>
  );
}
