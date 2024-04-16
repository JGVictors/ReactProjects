"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams, useRouter } from "next/navigation";

interface IPostParams extends Params {
    id: number;
}

export default async function Post() {
    const router = useRouter()
    const params: IPostParams = useParams()
    const postComments = await fetchPostComments(params.id)
    console.log(params);
    return (
    <main>
        <div className="container mx-auto px-6 pb-8">
            <button className="float-end" type="button" onClick={router.back}>Voltar</button>
            <h1 className="text-center font-extrabold text-4xl my-4"> Comentários do Post <span className="bg-gray-900 rounded-lg px-1">{params.id}</span></h1>
            <div className="grid gap-4">
                {postComments && postComments.map((postComment: IPostComment) => {
                    return (
                        <div key={postComment.id} className="flex flex-col justify-between bg-sky-950 rounded-lg p-4">
                            <div className="flex font-bold mb-3 rounded-md">
                                <h6><span className="mr-1 bg-sky-700 rounded-lg px-1">{postComment.id}</span>{postComment.name}</h6>
                            </div>
                            <p>{postComment.body}</p>
                            <div className="flex justify-between mt-3 text-sky-200">
                                <span className="place-self-end bg-sky-800 rounded-lg px-2 text-sm text-end">E-Mail: <span>{postComment.email}</span></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </main>
    );
}

interface IPostComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

async function fetchPostComments(postId: number): Promise<IPostComment[]> {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
    const jsonResult = await result.json()
    return jsonResult
}