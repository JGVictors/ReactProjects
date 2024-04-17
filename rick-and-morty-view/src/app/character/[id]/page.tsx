'use client'

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import Link from "next/link";

interface IPostParams extends Params {
    id: number;
}

export default async function Post() {
    const params: IPostParams = useParams()
    const character = await fetchCharacterDetailed(params.id)
    return (
        <main className="container mx-auto px-6 py-8">
            <div className="grid">
                <Link href="/">
                    <button className="float-end" type="button">Voltar</button>
                </Link>
                <h1 className="text-center text-4xl font-extrabold">{character.name}</h1>
            </div>
            <div className="flex flex-col items-center">
                <div key={character.id} className="m-2 p-2 rounded-lg bg-cyan-900 text-black">
                    <div className="items-center">
                        <img className="w-32 h-32 rounded-full mx-auto" src={character.image}></img>
                        <div className="text-center mt-3">
                            <div>Gênero: {character.gender}</div>  
                            <div>Status: {character.status}</div>
                            <div>Especie: {character.species}</div>
                            <div>Episódios: {character.episode.length}</div>
                            <div>Origem: {character.origin.name}</div>
                            <div>Localização: {character.location.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

interface ICharacterDetailed {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    episode: string[];
    origin: ILocation;
    location: ILocation;
    
}

interface ILocation {
    name: string;        
}

async function fetchCharacterDetailed(characterId: number): Promise<ICharacterDetailed> {
    const result = await fetch("https://rickandmortyapi.com/api/character/" + characterId)
    const data = await result.json()
    return data;
}