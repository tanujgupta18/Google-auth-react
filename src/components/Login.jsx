import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();

  // already logged-in user → direct home
  useEffect(() => {
    const user = localStorage.getItem("googleUser");
    if (user) navigate("/home");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-sm bg-zinc-900 rounded-2xl p-6 text-center shadow-lg">
        <h1 className="text-2xl font-semibold">Welcome Back 👋</h1>
        <p className="text-zinc-400 text-sm mt-2">
          Sign in with Google to continue
        </p>

        <div className="mt-6 flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const user = jwtDecode(credentialResponse.credential);
              localStorage.setItem("googleUser", JSON.stringify(user));
              navigate("/home");
            }}
            onError={() => console.log("Login Failed")}
          />
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};
