import React from 'react'
import style from './Button.module.scss'

interface Props{
    type?:"button" | "submit" | "reset" | undefined
    onClick? : ()=>void,
    children?: React.ReactNode
}

function Button({children,type="button",onClick}:Props){
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    )
}

export default Button