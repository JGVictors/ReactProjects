"use client"

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-8">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-extrabold text-4xl my-3">Rick and Morty View</h1>
        <div>
          <Link href={"character"}>
            <button className="mx-3 my-1 bg-cyan-950 px-2 rounded-lg">Personagens</button>
          </Link>
          <Link href={"episode"}>
            <button className="mx-3 my-1 bg-purple-950 px-2 rounded-lg">Episódios</button>
          </Link>
          <Link href={"location"}>
            <button className="mx-3 my-1 bg-teal-950 px-2 rounded-lg">Localizações</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
