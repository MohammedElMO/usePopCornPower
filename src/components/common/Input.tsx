import { ComponentProps, forwardRef } from "react"

 const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>
 (({ ...props },ref) =>
   <input ref={ref} className="search" type="text" placeholder="Search movies..." {...props} />

 )
export default Input
