import PersonIco from "../assets/person.png"
import GaleriaDevIco from "../../public/GaleriaIco.png"

export function Header() {
    return (
        <div className="flex flex-col items-center justify-center pt-10 pb-5 bg-slate-100">
            {/* Navegação */}
            <nav className="container flex justify-between">
                <div className="flex ">
                    <img className="h-12" src= {GaleriaDevIco} alt="Icone Galeria" />
                    <span 
                        className="flex justify-center items-center text-orange-600 text-lg font-bold">
                        Galeria Dev
                    </span>
                </div>

                <div className="flex gap-5 justify-center items-center">
                    <span className="font-medium text-slate-500 hover:text-orange-600 hover:border-orange-600 hover:border-b-2">Galeria</span>
                    <span className="font-medium text-slate-500 hover:text-orange-600 hover:border-orange-600 hover:border-b-2">Favoritos</span>
                    <img className="h-9 " src={PersonIco} alt="Icone de usuário" />
                </div>
            </nav>

            {/* Pesquisa por Autor */}
            <div className="flex flex-col items-center justify-center mt-16">
                <h1 
                    className="font-bold text-4xl text-orange-500 w-2/3 text-center">
                        Encontre as imagens do seu Autor
                </h1>
                <input 
                    className="mt-7 p-3 h-10 w-3/4 rounded-md border border-slate-300"
                    type="text" 
                    placeholder="Pesquisar..." />
            </div>
        </div>

    )
}