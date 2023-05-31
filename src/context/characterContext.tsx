import { useContext, useState, createContext, ReactNode, useEffect } from "react";
import { InitialValues, initialValues } from "../components/LoginFormik/initialValues";
import {Value} from "../interface/values"
import {ResultFetch} from "../interface/ResultFetch"



const CharacterContext = createContext<any>({
  resultFetch: () => {},
  searchFetch: () => {},
  characters: null,
  page:1,
  paginado: ()=>{},
  paginarCharacter: ()=>{},
  loading:true
 
});

export default function CharacterContextProvider({children}:{children:ReactNode}) {

    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState<ResultFetch[]>();
    const [page, setPage] = useState<number>(1);
    // const [personaje, setPersonaje] = useState<string>("");

    
    //PREGUNTAR A NACHO COMO QUITAR EL ANY
    

        async function resultFetch () {
          setLoading(true)
          const response = await fetch(
            `https://apisimpsons.fly.dev/api/personajes?page=${page}&&limit=4`
          );
          const data = await response.json();
          setCharacters(data.docs);
          console.log(characters)
          console.log(loading)
          setLoading(false)
          console.log(loading)

        }

        async function searchFetch (personaje:string) {
          setLoading(true)
            const response = await fetch(
              `https://apisimpsons.fly.dev/api/personajes/find/${personaje}`
            );
            const data = await response.json();
            setCharacters(data.result);
            console.log(data,"buscador")
            setLoading(false)

          }
        
      

      function paginado(pagina: number) {
        setPage(page + pagina);
      }

      function paginarCharacter(){
        setPage(1)
      }
    
    

    const value:any ={
      characters,
      resultFetch,
      searchFetch,
      page,
      paginado,
      loading,
      paginarCharacter
      
    }

    return(
      
      <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>
      
    )

}

export function useCharacterContext(){
  return useContext(CharacterContext)
}
