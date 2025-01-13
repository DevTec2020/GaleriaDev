import SearchIco from "../assets/search.svg"
import PersonIco from "../assets/person.png"
import GaleriaDevIco from "../../public/GaleriaIco.png"

export function Navbar() {
    return (
        <nav className="flex justify-around pt-10 pb-4 bg-slate-100">
                <div className="flex ">
                    <img className="h-12" src= {GaleriaDevIco} alt="Icone Galeria" />
                    <span 
                        className="flex justify-center items-center text-orange-600 text-lg font-bold">
                        Galeria Dev
                    </span>
                </div>

                <div className="flex gap-5 justify-center items-center">
                    <img className="h-5" src={SearchIco} alt="Icone de Busca" />
                    <span className="font-medium text-slate-500 hover:text-orange-600 hover:border-orange-600 hover:border-b-2">Explorer</span>
                    <span className="font-medium text-slate-500 hover:text-orange-600 hover:border-orange-600 hover:border-b-2">Favoritos</span>
                    <img className="h-9 " src={PersonIco} alt="Icone de usuário" />
                </div>

        </nav>

    )
}