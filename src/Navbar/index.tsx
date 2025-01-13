import searchIco from "../assets/search.svg"
import GaleriaDevIco from "../../public/GaleriaIco.png"

export function Navbar() {
    return (
        <nav className="flex justify-around">
                <div className="flex ">
                    <img className="h-12" src= {GaleriaDevIco} alt="Icone Galeria" />
                    <span className="flex justify-center items-center">Galeria Dev</span>
                </div>

                <div className="flex gap-5 justify-center items-center">
                    <img className="h-5 flex items-baseline" src={searchIco} alt="Icone de Busca" />
                    <span>Explorer</span>
                    <span>Favoritos</span>
                </div>

        </nav>

    )
}