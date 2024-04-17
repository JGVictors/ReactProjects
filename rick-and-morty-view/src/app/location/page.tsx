import React from "react";
import Link from "next/link";

export default async function Post() {
    const locations = await fetchLocation()
    return (
        <main className="container mx-auto px-6 py-8">
            <div className="grid">
                <Link href="/">
                    <button className="float-end" type="button">Voltar</button>
                </Link>
                <h1 className="text-center text-4xl font-extrabold">Personagens</h1>
            </div>
            <div className="grid flex flex-col grid-cols-3">
                {locations && locations.map((location: ILocation) => {
                    return (
                        <Link href={`/location/${location.id}`}>
                            <div key={location.id} className="m-2 p-2 rounded-lg bg-teal-900 text-black">
                                <div className="text-end">
                                    <div className="font-bold border-b-2 border-b-slate-950">{location.name}</div>
                                    <div>{location.type}</div>  
                                    <div>{location.dimension}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
}

async function fetchLocation(): Promise<ILocation[]> {
    const result = await fetch("https://rickandmortyapi.com/api/location")
    const data = await result.json()
    return data.results;
}