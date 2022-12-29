import { ITask } from "../../../models/Task";
import style from "./Item.module.scss";

interface props extends ITask {
  selectedTask: (selected: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectedTask,
}: props) {
  return (
    <li
      className={`${style.item} ${selected&&style.itemSelected} ${completed&&style.itemCompleted}`}
      onClick={() => !completed &&
        selectedTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <p>{time}</p>
      {completed&&<span className={style.completed}></span>}
    </li>
  );
}
