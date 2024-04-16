import React from "react";

export default async function Home() {
  let chuckPhrase = await fetchChuckPhrase();

  return (
    <main>
      <div className="mx-auto px-8 py-6 items-center flex-col flex">
        <h1 className="text-center font-extrabold text-4xl mb-4">Frase do Chuck Norris</h1>
        <div>
          <p className="bg-white rounded-lg p-2 text-black">{chuckPhrase && chuckPhrase.value}</p>
        </div>
        {/* TODO Refresh Phrase! */}
        <button className="align-center bg-slate-700 font-bold  px-1 rounded-lg my-4">
          Gerar outra frase
        </button>
      </div>
    </main>
  );
}

interface IChuckPhrase {
  created_at: Date;
  id: string;
  updated_at: Date;
  value: string;
}

async function fetchChuckPhrase(): Promise<IChuckPhrase> {
  const data = await fetch("https://api.chucknorris.io/jokes/random", {cache: 'no-store'})
  const jsonData = await data.json()
  return jsonData
}