
import React, { DetailedHTMLProps, FormHTMLAttributes } from "react"

export const FormTask: React.FC<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> = props => {
    const { children, ...other } = props

    return <form {...other}>{children}</form>
}