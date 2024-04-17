import React from "react";
import Link from "next/link";

export default async function Post() {
    const characters = await fetchCharacter()
    return (
        <main className="container mx-auto px-6 py-8">
            <div className="grid">
                <Link href="/">
                    <button className="float-end" type="button">Voltar</button>
                </Link>
                <h1 className="text-center text-4xl font-extrabold">Personagens</h1>
            </div>
            <div className="grid flex flex-col grid-cols-3">
                {characters && characters.map((character: ICharacter) => {
                    return (
                        <Link href={`/character/${character.id}`}>
                            <div key={character.id} className="m-2 p-2 rounded-lg bg-cyan-900 text-black">
                                <div className="grid flex flex-row grid-cols-2">
                                    <img className="w-24 h-24 rounded-full" src={character.image}></img>
                                    <div className="text-end">
                                        <div className="font-bold border-b-2 border-b-slate-950">{character.name}</div>
                                        <div>{character.gender}</div>  
                                        <div>{character.status}</div>
                                        <div>{character.species}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}

async function fetchCharacter(): Promise<ICharacter[]> {
    const result = await fetch("https://rickandmortyapi.com/api/character")
    const data = await result.json()
    return data.results;
}