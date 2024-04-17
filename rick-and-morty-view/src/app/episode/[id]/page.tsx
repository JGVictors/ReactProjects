'use client'

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import Link from "next/link";

interface IPostParams extends Params {
    id: number;
}

export default async function Post() {
    const params: IPostParams = useParams()
    const episode = await fetchEpisodeDetailed(params.id)
    return (
        <main className="container mx-auto px-6 py-8">
            <div className="grid">
                <Link href="/">
                    <button className="float-end" type="button">Voltar</button>
                </Link>
                <h1 className="text-center text-4xl font-extrabold">{episode.name}</h1>
            </div>
            <div className="flex flex-col items-center">
                <div key={episode.id} className="m-2 p-2 rounded-lg bg-purple-900 text-black">
                    <div>Episódio: {episode.episode}</div>
                    <div>Lançamento: {episode.air_date}</div>
                    <div>Personagens: {episode.characters.length}</div>
                </div>
            </div>
        </main>
    )
}

interface IEpisodeDetailed {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
}

async function fetchEpisodeDetailed(episodeId: number): Promise<IEpisodeDetailed> {
    const result = await fetch("https://rickandmortyapi.com/api/episode/" + episodeId)
    const data = await result.json()
    return data;
}