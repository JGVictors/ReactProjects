import React from "react";
import Link from "next/link";

export default async function Post() {
    const episodes = await fetchEpisode()
    return (
        <main className="container mx-auto px-6 py-8">
            <div className="grid">
                <Link href="/">
                    <button className="float-end" type="button">Voltar</button>
                </Link>
                <h1 className="text-center text-4xl font-extrabold">Personagens</h1>
            </div>
            <div className="grid flex flex-col grid-cols-3">
                {episodes && episodes.map((episode: IEpisode) => {
                    return (
                        <Link href={`/episode/${episode.id}`}>
                            <div key={episode.id} className="m-2 p-2 rounded-lg bg-purple-900 text-black">
                                <div className="text-end">
                                    <div className="font-bold border-b-2 border-b-slate-950">{episode.name}</div>
                                    <div>{episode.episode}</div>  
                                    <div>{episode.air_date}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
}

async function fetchEpisode(): Promise<IEpisode[]> {
    const result = await fetch("https://rickandmortyapi.com/api/episode")
    const data = await result.json()
    return data.results;
}