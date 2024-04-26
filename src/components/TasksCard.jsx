import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../themes/theme";

const TasksCard = ({ item, completedTask, deleteTask }) => {
  return (
    <View style={styles.contFlat}>
      <TouchableOpacity onPress={() => completedTask(item.id)}>
        <Text style={styles.date}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
        <Text style={item.completed ? styles.titleCompleted : styles.title}>
          {item.title}
        </Text>
        <Text style={item.completed ? styles.textCompleted : styles.text}>
          {item.content}
        </Text>
      </TouchableOpacity>
      {item.completed && (
        <TouchableOpacity
          style={styles.btnDelete}
          onPress={() => deleteTask(item.id)}
        >
          <Text style={styles.btnText}>
            Delete
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contFlat: {
    padding: 10,
    borderBottomColor: theme.colors.bgColor2,
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: "bold",
    color: theme.colors.textColor1,
    marginBottom: 10,
    fontSize: 20,
  },
  titleCompleted: {
    fontWeight: "bold",
    color: "#37435780",
    marginBottom: 10,
    fontSize: 20,
    textDecorationLine: "line-through",
  },
  text: {
    color: theme.colors.textColor2,
    fontSize: 18,
  },
  textCompleted: {
    color: "#37435780",
    fontSize: 18,
    textDecorationLine: "line-through",
  },
  btnDelete: {
    position: "absolute",
    right: "3%",
    top:"40%",
    color: theme.colors.textColor1,
    backgroundColor: theme.colors.bgColor2,
    padding: 13,
    borderRadius: 10,
  },
  btnText:{
    color: theme.colors.textColor2,
  },
  date:{
    color: theme.colors.textColor1,
    fontSize: 13,
    marginBottom: 5,
    fontWeight: "bold",
  }
});

export default TasksCard;
