import { ComponentProps } from "react"

// type InputProps = {} & 

function Input({ ...props }: ComponentProps<"input">) {
  return <input className="search" type="text" placeholder="Search movies..." {...props} />
}

export default Input
