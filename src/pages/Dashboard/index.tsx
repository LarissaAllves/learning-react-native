import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

interface INavigation {
  navigate: (pageName: string) => void;
}

interface IDashboardProps {
  navigation: INavigation;
}

export function Dashboard({ navigation }: IDashboardProps) {
  const [tarefa, setTarefa] = useState("");

  //adiciona a tarefa  no array
  async function handleAddTodo() {
    const todo = {
      id: String(new Date().getTime()),
      tarefa,
    };

    try {
      const data = await AsyncStorage.getItem("@si:todos");

      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, todo];
      await AsyncStorage.setItem("@si:todos", JSON.stringify(dataFormatted));
    } catch (error) {
      Alert.alert("Erro ao salvar tarefa");
    }
  }

  //carregar as informacoes

  async function loadDataTodo() {
    const data = await AsyncStorage.getItem("@si:todos");
    //SE TIVER DADOS SALVA NO DATA COMO STRING
    const currentData = data ? JSON.parse(data) : [];
  }
  useEffect(() => {
    loadDataTodo();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Tarefas" />
      <View style={styles.buttonContainer}>
        <Input
          placeholder="Adicione sua tarefa"
          placeholderTextColor="#d3d3de"
          value={tarefa}
          onChangeText={(value) => setTarefa(value)}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Visualizar Tarefas"
        onPress={() => navigation.navigate("Lista de tarefas")}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EBEBEB",
    display: "flex",
  },

  buttonContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "#9370DB",
    borderRadius: 4,
    padding: 10,
    marginLeft: 15,
    marginTop: -25,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
