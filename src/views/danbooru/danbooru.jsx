import { useState, useEffect } from "react";
import { getPic } from "../../apis/endpoint/danbooru";

export default function Danbooru() {
  const [pics, setPics] = useState([]);

  async function getImg() {
    const pic = await getPic();
    setPics(pic);
  }

  useEffect(() => {
    getImg();
  }, []);

  return (
    <>
      {pics.map((img) => (
        <li key={img.id} className="list-none">
          <img src={img.file_url} />
        </li>
      ))}
    </>
  );
}
