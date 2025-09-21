import BlogLayout from "@/layouts/blog-layout";

type Results = {
    results: [{
        title: string,
        description: string,
        name: string
    }]
}

export default function Dashboard(res: Results) {
    console.log(res)
    return (
        <BlogLayout>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {res.results.map((val)=>{
                    return(
                        <>
                        <h1>{val.title}</h1>
                        <span>Author: {val.name}</span>
                        </>
                    )
                })}
                <p>hola mami</p>
                <p>hola mami</p>
            </div>
        </BlogLayout>
    );
}
