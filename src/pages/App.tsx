import { useState } from "react";
import Clock from "../components/Clock";
import Form from "../components/Form";
import List from "../components/List";
import { ITask } from "../models/Task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [selected, setSelected] = useState<ITask>();

  function selectedTask(selected: ITask) {
    setSelected(selected);
    setTasks((tasks) =>
      tasks.map((task: ITask) => ({
        ...task,
        selected: selected.id === task.id,
      }))
    );
  }

  function completedTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((tasks) =>
        tasks.map((task) => {
          if (selected.id === task.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return { ...task };
        })
      );
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectedTask={selectedTask} />
      <Clock
        completedTask={completedTask} 
       selected={selected} />
    </div>
  );
}

export default App;
