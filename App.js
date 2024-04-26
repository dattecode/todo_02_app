import React from "react";
import Main from "./src/Main.jsx";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}
