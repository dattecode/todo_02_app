import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Input from "./components/Input";
import Constants from "expo-constants";
import AppBar from "./components/AppBar";
import TasksList from "./components/TasksList";
import { Routes, Route } from "react-router-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Main = () => {
  //states
  const [tasks, setTasks] = React.useState([]);

  //dataBase
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("mytasks");
      if (value !== null) {
        const taskLocal = JSON.parse(value);
        setTasks(taskLocal);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("mytasks", JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  //functions
  const addTask = (value) => {
    const task = {
      id: tasks.length + 1,
      title: value.title,
      content: value.content,
      completed: false,
      date: new Date(),
    };
    setTasks([...tasks, task]);
    storeData([...tasks, task]);
  };

  const completedTask = (id) => {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updateTask);
  };

  const deleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
    storeData(updateTask);
  };

  //effects

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <TasksList
              tasks={tasks}
              completedTask={completedTask}
              deleteTask={deleteTask}
            />
          }
        />
        <Route path="/add" element={<Input addTask={addTask} />} />
        <Route path="*" element={<TasksList />} />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default Main;
