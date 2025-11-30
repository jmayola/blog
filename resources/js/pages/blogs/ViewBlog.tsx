import BlogLayout from "@/layouts/blog-layout";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

type Results = {
  title: string;
  description: string;
  body: string;
  name: string;
  author: string;
  image_path: string;
};

export default function Dashboard(val: Results) {
  console.debug(val)
  return (
    <BlogLayout>
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto z-50 relative">
      <div className="w-screen min-h-[50vh]  absolute bg-orange-400"></div>
        <div
          className={
            "flex w-[70vw] m-auto place-content-stretch flex-col gap-5  p-5 rounded-xl relative z-1 pt-15"
          }
        >
          <div className="w-[100%] h-[90vh] flex flex-col align-center justify-around">
            <h1 className="font-bold text-2xl lg:text-6xl">{val.title}</h1>
            <p className="text-xl lg:text-2xl pl-5 text-wrap">{val.description}</p>
            <span className="text-gray-400">{val.author}</span>
            <img
              className="object-contain bg-[background] rounded-xl w-[100%] h-[70%]"
              src={"/storage/" + val.image_path}
              alt={`${val.title}, ${val.name}`}
            />
          </div>
          <div id="div_blog">
            {parse(DOMPurify.sanitize(val.body))}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
