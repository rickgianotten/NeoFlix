import DisplayWrapper from "./DisplayWrapper"
export default function Loading(){
    return <DisplayWrapper>
            <p style={{color: "var(--blue)"}}>...loading</p>
        </DisplayWrapper>
}