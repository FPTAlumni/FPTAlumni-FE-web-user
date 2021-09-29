import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getPic } from "../../apis/endpoint/danbooru";

export default function Danbooru() {
  const [pics, setPics] = useState([]);
  const [mounted, setMounted] = useState(true);

  const location = useLocation();

  async function getImg() {
    const pic = await getPic();
    if (mounted) setPics(pic);
  }

  useEffect(() => {
    getImg();
    return () => setMounted(false); //set unmount state to prevent unfinised axios call
  }, []);

  return (
    <div className="content-card mx-3 overflow-scroll no-scrollbar">
      <div className="relative m-3 flex flex-wrap ">
        {pics.map((img) => (
          <div
            key={img.id}
            className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer"
          >
            <div className="overflow-x-hidden rounded-2xl relative">
              <img
                className="h-40 rounded-2xl w-full object-cover"
                src={img.file_url}
              />
            </div>
            <div className="mt-4 pl-2 mb-2 flex justify-between ">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-0">
                  {img.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
