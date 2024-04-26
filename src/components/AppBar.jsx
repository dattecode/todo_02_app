import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../themes/theme";
import { Link, useLocation } from "react-router-native";

const AppTabBar = ({ children, to }) => {
  const { pathname } = useLocation();

  const active = pathname === to;

  const textStyles = [
    styles.text,
    active && styles.appActive 
  ];
  return (
    <Link to={to} underlayColor="transparent">
      <Text style={textStyles}>{children}</Text>
    </Link>
  );
};
const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <AppTabBar to="/add" style={styles.text}>
        Add Note
      </AppTabBar>
      <AppTabBar to="/" style={styles.text}>
        Notes
      </AppTabBar>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 50,
    backgroundColor: theme.colors.bgColor2,
    color: theme.colors.textColor2,
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    paddingLeft: 20,
  },
  appActive:{
    color: "#F5EF25",
  }
});

export default AppBar;
