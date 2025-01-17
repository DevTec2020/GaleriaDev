import { X } from "phosphor-react";


interface ImageModalProps {
    isOpen: boolean
    imageUrl: string
    author: string
    width: string
    height: string
    download_url: string
    onClose: () => void
}

export function ImageModal({ isOpen, imageUrl, author, width, height, download_url, onClose}:ImageModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-1 right-1 p-1.5 bg-orange-500 text-orange-200 rounded-full"
              onClick={onClose}
            >
              <X size={27}/>
            </button>

            <img src={imageUrl} alt={`Foto de ${author}`} className="w-96 rounded" />
            <div className="mt-2 text-center">
                <p className="mt-3 text-center font-bold text-2xl text-orange-500">{author}</p>
                <p className="mt-2"> Dimensões: {width}x{height}</p>
                <a href={download_url} target="_blank" className="underline text-orange-500 hover:text-orange-600">Ver Original</a>
            </div>
          </div>
        </div>
      );

}



