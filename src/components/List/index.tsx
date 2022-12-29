import { ITask } from "../../models/Task";
import Item from "./item";
import style from "./List.module.scss";

interface props {
  tasks: ITask[];
  selectedTask: (selected: ITask) => void;
}
function List({ tasks,selectedTask }: props) {
  return (
    <aside className={style.taskList}>
      <h2> Tarefas do dia </h2>
      <ul>
        {tasks.map((item) => (
          <Item 
          key={item.id} 
          {...item}
          selectedTask={selectedTask}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
