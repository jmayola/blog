import BlogLayout from "@/layouts/blog-layout";
import { cn } from "@/lib/utils";

type Results = {
        title: string,
        description: string,
        body: string,
        name: string,
        image_path: string
}

export default function Dashboard(res: Results) {
    const val = res
    return (
        <BlogLayout>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-10">
                <div className={"flex w-[80%] m-auto place-content-stretch flex-col gap-5"}> 
                        <h1 className="font-bold text-6xl">{val.title}</h1>
                        {val.description}
                        <span className="text-gray-400">{val.name}</span>
                        <div className="w-[100%] h-[1%]">
                        <img className="m-auto object-cover" src={"/storage/" + val.image_path} alt={`${val.title}, ${val.name}`} />
                        </div>
                        {val.body}
                </div>
            </div>
        </BlogLayout>
    );
}