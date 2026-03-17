import DisplayWrapper from "./DisplayWrapper"
export default function EmptyState({children}){
    return <DisplayWrapper>
            <p style={{color: "var(--blue)"}}>{children}</p>
        </DisplayWrapper >
}