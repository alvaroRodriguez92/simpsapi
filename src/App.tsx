
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "./Styles/ThemeProvider"
import CharacterContextProvider from './context/characterContext';
import AuthContextProvider from './context/userContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './views/Home/Home'
import CharactersView from './views/CharactersView/CharactersView';


function App() {

  return (
    <BrowserRouter>
    <CharacterContextProvider>
    <AuthContextProvider>
    <ThemeProvider theme={theme}>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/characters" element={<CharactersView/>}/>
    </Routes>
    
    </ThemeProvider>
    </AuthContextProvider>
    </CharacterContextProvider>
    </BrowserRouter>
  )
}

export default App
