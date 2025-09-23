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
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className={cn(`flex w-[80%] m-auto place-content-stretch flex-col`)}>
                        <img src={"/storage/" + val.image_path} alt="" />
                        <h1 className="font-bold text-6xl">{val.title}</h1>
                        {val.description}
                        {val.body}
                        <span>Author: {val.name}</span>
                </div>
            </div>
        </BlogLayout>
    );
}