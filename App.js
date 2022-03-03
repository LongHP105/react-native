import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [toDos, setTodos] = useState([
    { text: "Build the house", key: "1" },
    { text: "Coding", key: "2" },
    { text: "Eating", key: "3" },
    { text: "Sleeping", key: "4" },
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const handleSubmit = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} touchSoundDisabled={true}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={toDos}
              renderItem={({ item }) => {
                return <TodoItem item={item} pressHandler={pressHandler} />;
              }}
            />
          </View>
        </View>
        <StatusBar hidden={true} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
