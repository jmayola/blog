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
        <div className="overflow-ellipsis bg-gray-200 min-h-[300px]">
                    <img src={'/storage/' + results.image_path} alt="" className="object-cover m-auto" />

            <Link href={'/blog/' + results.title} className="">

                <div className="p-3">
                    <h1 className="text-2xl font-bold overflow-clip ">{results.title}</h1>
                    {/* <span>Author: {results.name}</span> */}
                </div>
            </Link>
        </div>
    );
}


export default Blog;
