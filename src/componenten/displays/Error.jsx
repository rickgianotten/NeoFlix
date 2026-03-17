import DisplayWrapper from "./DisplayWrapper"
export default function Error({children}){
    return <DisplayWrapper>
        <p style={{color: "red"}}>{`..error: ${children}`}</p>
    </DisplayWrapper>

}