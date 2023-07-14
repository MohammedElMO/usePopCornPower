import { ComponentProps, ReactNode } from "react"

type buttonProps ={ 
    children:ReactNode
} & ComponentProps<"button">


function Button({children,...props}:buttonProps) {
  return <button {...props}>{children}</button>
}

export default Button
