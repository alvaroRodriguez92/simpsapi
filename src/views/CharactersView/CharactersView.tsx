import Nav from "../../components/Nav/Nav";
import {Box} from "@mui/material"
import Characters from "../../components/Characters/Characters"

export default function CharactersView(){
    return(
        <>
        {/* <header>
        <Nav/>
        </header> */}
        <main className="characterView">
        <Characters/>
        </main>
        </>
    )
}