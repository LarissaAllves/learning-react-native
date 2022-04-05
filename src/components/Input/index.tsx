import {
  View,
  TextInput,
  Platform,
  StyleSheet,
  TextInputProps,
} from "react-native";

type InputProps = TextInputProps;

export function Input({ ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput {...rest} style={styles.input} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    flexDirection: "column",
    alignItems: "center",
    //position: "relative",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: Platform.OS === "ios" ? 15 : 10,
    marginLeft: 20,
    fontSize: 15,
    marginTop: -20,
    borderRadius: 4,
  },
});
