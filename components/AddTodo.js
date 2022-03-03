import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddTodo = ({handleSubmit}) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  const onPressHandler = () => {
      if(!text) {
          Alert.alert('Error', 'Input valid data');
          return
      };
      handleSubmit(text);
      setText('');
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add todo..."
        onChangeText={(val) => {
          changeHandler(val);
        }}
        value={text}
      />
      <Button color='coral' title="Add Todo" onPress={onPressHandler}/>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

});
