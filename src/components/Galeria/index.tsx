import { useState, useEffect } from "react"
import { fetchImagens } from "../../api"
import { ImageModal } from "../Modal"

import { Star } from "phosphor-react";


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

    if (loading) return <p className="flex justify-center my-10 text-3xl font-bold text-orange-500">Carregando...</p>;


    return (
        <div className="flex items-center justify-center mt-10">
            <div className="container flex justify-center flex-wrap gap-4 ">
                {imagens.map((image) => (
                    <div key={image.id} className="relative cursor-pointer" onClick={() => setSelectedImage(image)}>
                        <img 
                            src={`${image.download_url}?w=200&h=150`} 
                            alt={`Foto de ${image.author}`}
                            className="h-72 w-80 rounded-lg hover:object-cover"
                            loading="lazy"
                        />

                        <button 
                            className="absolute bg-orange-200 top-1 right-1 p-1 font-bold text-2xl  text-orange-500 rounded-full"
                        >
                                <Star size={22} />
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