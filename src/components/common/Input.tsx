import { ComponentProps } from "react"

// type InputProps = {} & 

function Input({ ...props }: ComponentProps<"input">) {
  return <input className="search" type="search" placeholder="Search movies..." {...props} />
}

export default Input
