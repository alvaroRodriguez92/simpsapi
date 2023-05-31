import Nav from "../../components/Nav/Nav";
import LoginFormik from "../../components/LoginFormik/LoginFormik";
import {Box} from "@mui/material"
import { useAuthContext } from "../../context/userContext";
import NavSinBuscador from "../../components/Nav/NavSinBuscador"




export default function Home(){

    const {user} = useAuthContext()

    return(
        <>
        <header>
        {user?.email?<NavSinBuscador/>:""}
        </header>
        <main className="principal">
        <Box sx={{width:"30%", p:10}}>
        <LoginFormik/>
        </Box>           
        </main>
        </>
    )
}