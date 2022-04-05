import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IHeaderProps {
  title?: string;
  quantTarefa?: string;
}

export function Header({ title, quantTarefa }: IHeaderProps) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      {quantTarefa && <Text style={styles.title}>{quantTarefa} </Text>}
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "#A020F0",
    padding: 10,
    paddingBottom: 35,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
