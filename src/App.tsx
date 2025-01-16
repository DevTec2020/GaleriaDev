import { useState } from "react"

import { Header } from "./components/Header" 
import { Galeria } from "./components/Galeria"
import { Favorites } from "./components/Favorites"
import { Footer } from "./components/Footer"

export function App() {
  const [currentPage, setCurrentPage] = useState("galeria")

  {/* Verificando o currentPage para retornar a pagina correta */}
  const renderPage = () =>  {
      switch (currentPage) {
        case "galeria":
          return <Galeria />
        
        case "favorites":
          return <Favorites />

        default:
          return <Galeria />
      }
  };


  return (
  // Aqui o Header atualiza o valor da setCurrentPage com o valor recebido do component
      <div className="">
        <Header setCurrentPage={setCurrentPage} />
        
        {renderPage()}

        <Footer />
      </div>
  )
}
