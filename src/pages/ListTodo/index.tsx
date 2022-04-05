import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Header } from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListTodoCard } from "../../components/ListTodoCard";

interface IListTodosProps {
  id: string;
  tarefa: string;
}

export function ListTodo() {
  const [todos, setTodos] = useState<IListTodosProps[]>([]);

  async function loadDataTodo() {
    const data = await AsyncStorage.getItem("@si:todos");

    if (data) {
      setTodos(JSON.parse(data));
    }
  }

  useEffect(() => {
    loadDataTodo();
  }, []);

  async function deleteTodo(id: string) {
    setTodos((oldValue) => oldValue.filter((todo) => todo.id != id));
    await AsyncStorage.setItem("@si:todos", JSON.stringify(todos));
  }

  return (
    <View style={styles.container}>
      <Header quantTarefa={`Voce tem ${todos.length} tarefas`} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListTodoCard item={item} handleDelete={() => deleteTodo(item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
