'use client'

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import Link from "next/link";

interface IPostParams extends Params {
    id: number;
}

export default async function Post() {
    const params: IPostParams = useParams()
    const location = await fetchLocationDetailed(params.id)
    return (
        <main className="container mx-auto px-6 py-8">
            <div className="grid">
                <Link href="/">
                    <button className="float-end" type="button">Voltar</button>
                </Link>
                <h1 className="text-center text-4xl font-extrabold">{location.name}</h1>
            </div>
            <div className="flex flex-col items-center">
                <div key={location.id} className="m-2 p-2 rounded-lg bg-teal-900 text-black">
                    <div>Tipo: {location.type}</div>
                    <div>Dimensão: {location.dimension}</div>
                    <div>Residentes: {location.residents.length}</div>
                </div>
            </div>
        </main>
    )
}

interface ILocationDetailed {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
}

async function fetchLocationDetailed(locationId: number): Promise<ILocationDetailed> {
    const result = await fetch("https://rickandmortyapi.com/api/location/" + locationId)
    const data = await result.json()
    return data;
}