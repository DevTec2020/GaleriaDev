import { useState, useEffect } from "react"
import { fetchImagens } from "../../api"
import { ImageModal } from "../Modal"

import { Star} from "phosphor-react";


interface Imagem {
    id: string
    author: string
    width: string
    height: string
    url: string
    download_url:string

}

export function Galeria(){
    const [imagens, setImagens] = useState<Imagem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<Imagem | null>(null)
    const [favoritos, setFavoritos] = useState<Imagem[]>([]);

    

    // Importando dados da API
    useEffect(() => {
        const loadImages = async () => {

            //Chama a função com os dados
            const data = await fetchImagens();
            setLoading(false);
            setImagens(data)
        };

        loadImages();
    },[]);


    // Carregar favoritos armazenados no localStorage
    useEffect(() => {
        const favoritosSalvos = localStorage.getItem("favoritos");
        if (favoritosSalvos) {
          setFavoritos(JSON.parse(favoritosSalvos));
        }
      }, []);




    // Função para salvar favoritos no localStorage
    const salvarFavoritos = (favoritosAtualizados: Imagem[]) => {
        setFavoritos(favoritosAtualizados);
        localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizados));
    };


    // Função para marcar/desmarcar imagem como favorita
    const toggleFavorito = (imagem: Imagem) => {

        //Verificando se a imagem clicada ja é favoritada 
        const jaFavorito = favoritos.some((fav) => fav.id === imagem.id);

        // Se SIM ele remove das favoritas
        if (jaFavorito) {
            const novosFavoritos = favoritos.filter((fav) => fav.id !== imagem.id);
            salvarFavoritos(novosFavoritos);
        } 
        
        // Caso não, ele adiciona no arry
        else {
            const novosFavoritos = [...favoritos, imagem];
            salvarFavoritos(novosFavoritos);
        }
    };


    //Aguardando carregar as iagens 
    if (loading) 
        return (
            <p className="text-center my-10 text-xl font-bold text-slate-500">
                Carregando...
            </p>
        );


    return (
        <div className="flex items-center justify-center mt-10">
            <div className="container flex justify-center flex-wrap gap-4 ">
                {imagens.map((image) => (
                    <div key={image.id} className="relative cursor-pointer">
                        <img 
                            src={`${image.download_url}?w=200&h=150`} 
                            alt={`Foto de ${image.author}`}
                            className="h-72 w-80 rounded-lg hover:object-cover"
                            loading="lazy"
                            onClick={() => setSelectedImage(image)}
                        />

                        <button 
                            className="absolute top-1 right-1 p-1 font-bold text-2xl bg-orange-200 text-orange-500 rounded-full hover:bg-orange-300"
                            onClick={() => toggleFavorito(image)}
                        >
                        
                        {favoritos.some((fav) => fav.id === image.id) ? (<Star size={27} weight="fill"/>) : (<Star size={27} />)}
                        
                        </button>

                    </div>
                ))}
            </div>

            {/*Modal*/}
            <ImageModal
                isOpen={!!selectedImage}
                imageUrl={selectedImage?.download_url || ""}
                author={selectedImage?.author || ""}
                width={selectedImage?.width || ""}
                height={selectedImage?.height || ""}
                download_url={selectedImage?.download_url || ""}
                onClose={() => setSelectedImage(null)}
            />
        </div>    
    )
}