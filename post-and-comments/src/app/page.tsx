import React from "react";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main>
      <div className="container mx-auto px-6 pb-8">
        <h1 className="text-center font-extrabold text-4xl my-4">Posts</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-1  gap-4">
          {posts && posts.map((post: IPost) => {
            return (
              <div key={post.id} className="flex flex-col justify-between bg-sky-950 rounded-lg p-4">
                <div className="flex font-bold mb-3 rounded-md">
                  <h6><span className="mr-1 bg-sky-700 rounded-lg px-1">{post.id}</span>{post.title}</h6>
                </div>
                <p>{post.body}</p>
                <div className="flex justify-between mt-3 text-sky-200">
                  <span className="place-self-end bg-sky-800 rounded-lg px-2 text-sm text-end">User ID: <span>{post.userId}</span></span>
                  <Link href={`/posts/${post.id}/comments`}>
                    <span className="font-bold text-md">Comments</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  );
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<IPost[]> {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts")
  const jsonResult = await result.json()
  return jsonResult
}