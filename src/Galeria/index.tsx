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
            <div className="container flex justify-center flex-wrap gap-2 ">
                {Imagens.map((img) => (
                    <div key={img.id}>
                        <img 
                            src={`${img.download_url}?w=200&h=150`} 
                            alt={`Foto de ${img.author}`}
                            className="h-48 w-56 rounded-sm"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>    
    )
}