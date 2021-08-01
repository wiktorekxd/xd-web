export interface Movie {
    id: string, 
    title: string,
    description: string,
    imageBase64: string
    genreId: number 
    releaseDate: Date 
}

export interface Genre {
    id: number,
    name: string
}