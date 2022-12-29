import style from './Timer.module.scss'

interface Props {
    time:number | undefined
}
export default function Timer({time=0}:Props){
    console.log(Math.floor(time/60))
    const [minuteHundreds,minuteTens,minuteUnits] = String(Math.floor(time/60)).padStart(3,'0')
    const [secondTens,secondUnits] = String(time%60).padStart(2,'0')



    return(
        <>
            <span className={style.timerNumber}>{minuteHundreds}</span>
            <span className={style.timerNumber}>{minuteTens}</span>
            <span className={style.timerNumber}>{minuteUnits}</span>
            <span className={style.timerHint}>:</span>
            <span className={style.timerNumber}>{secondTens}</span>
            <span className={style.timerNumber}>{secondUnits}</span>
        </>
    )
}