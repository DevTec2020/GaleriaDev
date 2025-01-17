import { useState, useEffect } from "react"

import { Star} from "phosphor-react";


interface Imagem {
    id: string;
    author: string;
    width: string;
    height: string;
    url: string;
    download_url: string;
}

export function Favorites() {
    const [favoritos, setFavoritos] = useState<Imagem[]>([]);

    // Carregar favoritos do localStorage ao iniciar
    useEffect(() => {
      const favoritosSalvos = localStorage.getItem("favoritos");
      if (favoritosSalvos) {
        setFavoritos(JSON.parse(favoritosSalvos));
      }
    }, []);


// Função para remover imagem dos favoritos
const removerFavorito = (id: string) => {
    const novosFavoritos = favoritos.filter((imagem) => imagem.id !== id);
    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };

    return (
    <div className="flex items-center justify-center mt-10">
        <div className="container flex justify-center flex-wrap gap-4">
        {favoritos.length > 0 ? (
            favoritos.map((image) => (
            <div key={image.id} className="relative cursor-pointer">
                <img
                src={`${image.download_url}?w=200&h=150`}
                alt={`Foto de ${image.author}`}
                className="h-72 w-80 rounded-lg hover:object-cover"
                loading="lazy"
                />

                <button
                className="absolute bg-orange-200 top-1 right-1 p-1 font-bold text-orange-500 rounded-full hover:bg-orange-300"
                onClick={() => removerFavorito(image.id)}
                >
                <Star size={27} weight="fill" />
                </button>
            </div>
            ))
        ) : (
            <p className="text-center my-10 text-xl font-semibold text-slate-500 ">Nenhuma imagem adicionada ainda.</p>
            
        )}
        </div>
    </div>
    );
}