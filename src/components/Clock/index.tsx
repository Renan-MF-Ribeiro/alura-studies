import { useEffect, useState } from "react";
import { ITask } from "../../models/Task";
import { TimeToSecond } from "../../utils/time";
import Button from "../Button";
import style from "./Clock.module.scss";
import Timer from "./Timer";

interface Props {
  selected: ITask | undefined,
  completedTask:()=>void
}

export default function Clock({ selected,completedTask }: Props) {
  const { title, timerWrapper, clock } = style;

  const [time, setTime] = useState<number>();

  function timerDecrese(timeCurrent:number=0){
    setTimeout(()=>{
        if(timeCurrent > 0){
            setTime(timeCurrent-1)
            return timerDecrese(timeCurrent-1)
        }
        alert('Atividade Concluída!')
        completedTask()
    },1000)
}

  useEffect(() => {
    selected?.time && setTime(TimeToSecond(selected.time));
  }, [selected]);

  return (
    <div className={clock}>
      <p className={title}>Escolha um card e inicie o Cronômetro</p>
      <div className={timerWrapper}>
        <Timer time={time} />
      </div>
      <Button  onClick={() => timerDecrese(time)}>Começar!</Button>
    </div>
  );
}
