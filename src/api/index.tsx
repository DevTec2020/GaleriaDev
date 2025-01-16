
const apiUrl: string = 'https://picsum.photos/v2/list' 

export const fetchImagens = async () => {
    try {
        // Consultando API
        const response = await fetch (apiUrl);
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados da API.")
        }
        
        // Retornando os dados consultados na API
        return await response.json();
    
    } catch (error) {
       console.error(error);

       // Se der erro ele retorna um arry vazio
       return[]; 
    }
};