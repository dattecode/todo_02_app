import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import TasksCard from "./TasksCard";

const TasksList = ({ tasks, completedTask, deleteTask }) => {
  return (
    <View style={styles.containerTasks}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => 
        (
        <TasksCard 
        item={item} 
        completedTask={completedTask}
        deleteTask={deleteTask}
        />
      )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTasks: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
});

export default TasksList;
