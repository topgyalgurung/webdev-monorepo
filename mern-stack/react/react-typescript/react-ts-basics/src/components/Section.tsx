import type { ReactNode } from "react"

// children different than props 
// children contain whatever jsx element or text content placed between opening and closing tag of component 
type SectionProps = {
    title?: string,
    children: ReactNode // in the past without this
}
// old way Section:React.FC<{title:string}>
// no default prop, just default value for title since its optional ?
export const Section = ({children, title="My Subheading"}:SectionProps) =>{
    return (
        <section>
            <h2> {title}</h2>
            <p> {children}</p>
        </section>
    )
}