import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("googleUser"));

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("googleUser");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-sm bg-zinc-900 rounded-2xl p-6 text-center shadow-lg">
        <img
          src={user?.picture}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto border-2 border-zinc-700"
        />

        <h2 className="mt-4 text-xl font-semibold">{user?.name}</h2>
        <p className="text-zinc-400 text-sm">{user?.email}</p>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 transition rounded-lg py-2 font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
