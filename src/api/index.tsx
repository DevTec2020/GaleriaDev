
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


// Filtrando a api com base na busca
export const filterImagens = async (search : string) => {
    try {
        //Aguardando os dados da api
        const data = await fetchImagens();

        // Filtra os dados retornados pelo nome o autor 
        return data.filter((image:{author: string}) =>
            image.author.toLowerCase().includes(search.toLowerCase())
        );
    } catch (error) {
        console.error("Erro ao consultar a API:", error);
        return [];
    }
};