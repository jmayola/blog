import { Link } from '@inertiajs/react';

export type BlogType = {
    results: {
        title: string;
        description: string;
        name: string;
        image_path: string;
    };
};
export type BlogResultType = {
    results: [
        {
            title: string;
            description: string;
            name: string;
            image_path: string;
        },
    ];
};

function Blog({ results }: BlogType) {
    return (
        <>
            <Link href={'/blog/' + results.title} className="">
                 <img
                    src={'/storage/' + results.image_path}
                    alt=""
                    className="m-auto object-cover"
                />
                <div className="p-3 absolute bottom-0 bg-gray-300/60 hover:h-full transition-all backdrop-blur-xs w-full">
                    <h1 className="overflow-clip text-2xl font-bold text-shadow-pink-400 hover:text-pink-400 text-shadow-2xs text-gray-900">
                        {results.title}
                    </h1>
                </div>
            </Link>
        </>
    );
}

export default Blog;
