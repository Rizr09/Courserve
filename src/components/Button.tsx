import React, { ReactNode } from "react"

interface Props {
    classes?: string;
    children: ReactNode;
}

const Button = ({ classes, children }: Props) => {
    return (
        <>
            <button className={"p-2 " + classes}>{ children }</button>
        </>
    )
}

export default Button;