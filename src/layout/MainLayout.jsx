import Header from "./Header"
import Main from "./Main"
export default function MainLayout({children}){
    return <>
        <Header/>
        <Main>
            {children}
        </Main>
    </>
}