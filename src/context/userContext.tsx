import { useContext, useState, createContext, ReactNode } from "react";
import { InitialValues, initialValues } from "../components/LoginFormik/initialValues";
import {Value} from "../interface/values"
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<Value>({
  login: () => {},
  logout: () => {},
  user: null,
});

export default function AuthContextProvider({children}:{children:ReactNode}) {
  const navigate = useNavigate()
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const [errorMessage, setErrorMessage] = useState("")
    
    //PREGUNTAR A NACHO COMO QUITAR EL ANY
    function login(values:any, actions:any) {
        if (
            values.email==="alvaro@gmail.com" && values.password==="Malaga2020"
        ){
          setUser(values)
          actions.resetForm();
        }else{
          alert("Los datos introducidos no son correctos")

        }

    }

    function logout(){
      setUser({email:"",password:""});
      navigate("/");
    }

    const value:any ={
      user,
      login,
      logout,
      
    }

    return(
      
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      
    )

}

export function useAuthContext(){
  return useContext(AuthContext)
}
