import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface IItem {
  tarefa: string;
}

interface ListTodosCardProps {
  item: IItem;
  handleDelete?: () => void;
}

export function ListTodoCard(props: ListTodosCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textList}>{props.item.tarefa}</Text>
      <TouchableOpacity style={styles.button} onPress={props.handleDelete}>
        <Text>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: "#EBEBEB",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textList: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#9370DB",
    borderRadius: 10,
    padding: 10,
  },
});
