import BlogLayout from "@/layouts/blog-layout";

type Results = {
  title: string;
  description: string;
  body: string;
  name: string;
  image_path: string;
};

export default function Dashboard(res: Results) {
  const val = res;
  return (
    <BlogLayout>
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-10">
        <div
          className={
            "flex w-[90vw] m-auto place-content-stretch flex-col gap-5 bg-ring/40 p-5 rounded-xl"
          }
        >
          <div className="w-[100%] h-[90vh] flex flex-col align-center justify-around">
            <h1 className="font-bold text-6xl">{val.title}</h1>
            <p className="text-2xl pl-5 text-wrap">{val.description}</p>
            <span className="text-gray-400">{val.name}</span>
            <img
              className="object-contain rounded-xl bg-ring/50 w-[100%] h-[70%]"
              src={"/storage/" + val.image_path}
              alt={`${val.title}, ${val.name}`}
            />
          </div>
          <p className="text-lg">{val.body}</p>
        </div>
      </div>
    </BlogLayout>
  );
}
