import { useState, useEffect } from "react"


interface Imagem {
    id: string
    author: string
    download_url:string
}

export function Galeria(){
    const [Imagens, setImagens] = useState<Imagem[]>([]);



    // Importando imagem da API
    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then((response) => response.json())
            .then((data) => setImagens(data))
            .catch((error) => console.error("Erro ao carregar imagens", error));
    },[]);


    return (
        <div className="flex items-center justify-center mt-10">
            <div className="container flex justify-center flex-wrap gap-4 ">
                {Imagens.map((img) => (
                    <div key={img.id} className="relative">
                        <img 
                            src={`${img.download_url}?w=200&h=150`} 
                            alt={`Foto de ${img.author}`}
                            className="h-72 w-80 rounded-lg hover:object-cover"
                            loading="lazy"
                        />
                         
                        <input 
                            className="absolute inset-0 w-5 h-5 m-2 text-orange-500 rounded-full"
                            type="checkbox" 
                        />

                    </div>
                ))}
            </div>
        </div>    
    )
}