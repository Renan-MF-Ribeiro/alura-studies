import { useState } from "react";
import { ITask } from "../../models/Task";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuid } from "uuid";

const { newTask, inputContainer } = style;

function Form({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) {
  let taskEmpty: ITask = {
    task: "",
    time: "00:00:00",
    completed: false,
    selected: false,
    id: "",
  };

  const [task, setTask] = useState(taskEmpty);

  return (
    <form
      noValidate
      className={newTask}
      onSubmit={(event) =>
        {event.preventDefault()
          return setTasks((tasks) => [
          ...tasks,
          { ...task, completed: false, selected: false, id: uuid() },
        ])}
      }
    >
      <div className={inputContainer}>
        <label htmlFor="task">Nome da Atividade:</label>
        <input
          type="text"
          id="task"
          name="task"
          value={task.task}
          onChange={(event) => setTask({ ...task, task: event.target.value })}
          placeholder="Nova Tarefa"
          required
        />
      </div>
      <div className={inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          value={task.time}
          onChange={(event) => setTask({ ...task, time: event.target.value })}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit"> Adicionar</Button>
    </form>
  );
}
export default Form;
