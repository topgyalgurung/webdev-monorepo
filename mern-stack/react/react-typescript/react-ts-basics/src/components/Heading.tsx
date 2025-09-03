import type { ReactElement } from "react"

type HeadingProps = {
    title:string
}

// to be more specific return type since only returning an element
// normal to let typescript infer it as JSX element
const Heading = ({title}: HeadingProps):ReactElement => {
  return (
    <h1>{title}</h1>
  )
}

export default Heading