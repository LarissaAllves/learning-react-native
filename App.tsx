import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Dashboard } from "./src/pages/Dashboard";
import { ListTodo } from "./src/pages/ListTodo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="dashboard">
        <Stack.Screen
          name="Inicio"
          component={Dashboard}
          options={{
            title: "Inicio",
            headerTintColor: "#A020F0",
            headerStyle: {
              backgroundColor: "#A020F0",
            },
          }}
        />
        <Stack.Screen
          name="Lista de tarefas"
          component={ListTodo}
          options={{
            title: "Lista de tarefas",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#A020F0",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
