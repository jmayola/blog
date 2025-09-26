import { Link } from "@inertiajs/react";
import React from 'react'

export type BlogType = {
    results: {
        title: string,
        description: string,
        name: string,
        image_path: string
    }
}
export type BlogResultType = {
    results: [{
        title: string,
        description: string,
        name: string,
        image_path: string
    }]
}

function Blog({results}: BlogType ) {
    return (
        <>
            <Link href={'/blog/' + results.title} className="rounded-3xl bg-gray-200 dark:bg-ring/40 p-3">
                <div className="">
                    <img src={'/storage/' + results.image_path} alt="" className="object-cover w-[inherit] h-[300px] rounded-3xl m-auto dark:border-gray-200" />
                    <h1 className="text-wrap text-2xl font-bold">{results.title}</h1>
                    <span className="text-gray-400">{results.name}</span>
                </div>
            </Link>
        </>
    );
}


export default Blog;
