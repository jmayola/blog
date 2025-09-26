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
            <Link href={'/blog/' + results.title} className="rounded-3xl bg-gray-200 p-3">
                <div >
                    <img src={'/storage/' + results.image_path} alt="" />
                    <h1>{results.title}</h1>
                    <span>Author: {results.name}</span>
                </div>
            </Link>
        </>
    );
}


export default Blog;
