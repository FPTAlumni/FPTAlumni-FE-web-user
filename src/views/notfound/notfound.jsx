import { useNavigate } from "react-router";
import notfound from "../../assets/404.png";
import "./notfound.css"

export default function Notfound(props) {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex  justify-center">
      <button
      onClick={()=>navigate("/home")}
        className="bg-button hover:bg-red-200 active:bg-red-300 text-lg text-button px-4
          border rounded-full m-auto shadow-lg w-72 h-20"
      >
          Back to home
      </button>
      <img className="h-2/5 mr-3 self-center" src={notfound} alt="Not Found" />
    </div>
  );
}
