import BlogLayout from "@/layouts/blog-layout";

type Results = {
    results: [{
        title: string,
        description: string,
        name: string,
        image_path: string
    }]
}

export default function Dashboard(res: Results) {
    console.log(res)
    return (
        <BlogLayout>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid grid-cols-3 lg:grid-cols-4 w-[80%] m-auto place-content-stretch">
                {res.results.map((val)=>{
                    return(
                        <div>
                        <img src={"/storage/" + val.image_path} alt="" />
                        <h1>{val.title}</h1>
                        <span>Author: {val.name}</span>
                        </div>
                    )
                })}
                </div>
            </div>
        </BlogLayout>
    );
}
