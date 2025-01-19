import { useState } from "react"

import { Header } from "./components/Header" 
import { Galeria } from "./components/Galeria"
import { Favorites } from "./components/Favorites"
import { Footer } from "./components/Footer"
import { filterImagens } from "./api"

export function App() {
  const [currentPage, setCurrentPage] = useState("galeria") // Controla a pagina mostrada na galeria
  const [filteredImages, setfilteredImages] = useState<any[]>([]) // Estado que vou usar para filtrar as imagens

  {/* Armazenando as imagens Buscandas*/}
  const handleSearch = async (search: string) => {
    const images = await filterImagens(search);
    setfilteredImages(images);
  }

  {/* Verificando o currentPage para retornar a pagina correta */}
  const renderPage = () =>  {
      switch (currentPage) {
        case "galeria":
          return <Galeria  filterImagens={filteredImages} />
        
        case "favorites":
          return <Favorites />

        default:
          return <Galeria filterImagens={filteredImages} />
      }
  };


  return (
  // Aqui o Header atualiza o valor da setCurrentPage com o valor recebido do component
      <div className="">
        <Header setCurrentPage={setCurrentPage} onSearch={handleSearch} />
        
        {renderPage()}

        <Footer />
      </div>
  )
}
