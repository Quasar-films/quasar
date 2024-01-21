export type User = {
    id: string,
    name: string,
    surname: string,
    date_of_birth: string,
    favorites: Film[],
}

export type Film = {
    id: string,
    name: string,
    description: string,
    date_of_release: string,
    image_link: string,
    trailer_link: string,
    country: string,
    genre: string,
    duration: number,
    budget: number,
    age_restriction: number,
    actors: Actor[]
}

export type Actor = {
    id: string,
    name: string,
    surname: string,
    date_of_birth: string,
}

export type Size = 'sm' | 'md' | 'lg';