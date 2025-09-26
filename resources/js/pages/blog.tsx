'';
import Blog, { BlogType } from '@/components/Blog';
import BlogLayout from '@/layouts/blog-layout';
import { useEffect, useState } from 'react';

type ArrayObject<T> = {
    [P in keyof T]: [T[P]];
};

type BlogResult = ArrayObject<BlogType>;

export default function Dashboard({ results }: BlogResult) {
    // detect if search mode is enabled
    const [Search, SetSearch] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            var arr = location.href.split('?');
            if (arr.length > 1 && arr[1] !== '') {
                SetSearch(true);
            }
        }, 2000);
    }, []);

    return (
        <BlogLayout>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {Search && (
                    <span className="text-4xl text-black m-auto">
                        Resultados de la busqueda
                    </span>
                )}
                <div
                    className={
                        'm-auto flex w-[80%] columns-3 flex-wrap place-content-stretch'
                    }
                >
                    {results.map((val) => {
                        return <Blog results={val} />;
                    })}
                </div>
            </div>
        </BlogLayout>
    );
}
