import { useEffect, useState } from "react";

import { getPic } from "../apis/endpoint/danbooru";
import logo from "../logo.svg";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [count, setCount] = useState(0);
  const [pics, setPics] = useState([]);

  async function getImg() {
    // const pic = await getPic();
    setPics(pic);
  }

  useEffect(() => {
    // getImg();
  }, []);

  return (
    <div className="App container">
      <div className="w-screen grid grid-cols-7">
        <div className="h-screen col-span-1 bg-blue-900">
          <div className="flex flex-col justify-center h-24">
            <p className="text-center text-g text-2xl">
              <FontAwesomeIcon className="fa-fw" icon="dog" size="lg" />
              Nyam IV
            </p>
          </div>
          <nav className="text-lg font-semibold text-white">
            <a href="#" className="block py-3 px-4 hover:bg-red-300 ">
              <FontAwesomeIcon className="fa-fw" icon="home" size="lg" />
              <span className="pl-8">Home</span>
            </a>
            <a href="#" className="block py-3 px-4 hover:bg-red-300">
              <FontAwesomeIcon className="fa-fw" icon="ambulance" size="lg" />
              <span className="pl-8">Ambu</span>
            </a>
            <a href="#" className="block py-3 px-4 hover:bg-red-300">
              <FontAwesomeIcon
                className="fa-fw"
                icon="address-book"
                size="lg"
              />
              <span className="pl-8">Address</span>
            </a>
          </nav>
        </div>
        <div className="col-span-6 bg-green-200">
          <div className="h-screen grid grid-rows-5 gap-1">
            <div className="row-span-1 bg-green-500">2</div>
            <div className="row-span-3">3</div>
          </div>
        </div>
      </div>
      {/* {pics.map((img) => (
          <ul>
            <img src={img.file_url} />
          </ul>
        ))} */}
    </div>
  );
}

export default App;
