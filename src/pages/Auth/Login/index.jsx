import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../../assets/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      localStorage.setItem("user", true);
      navigate("/");
    } else {
      alert("Login yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
      <div className="flex items-center gap-10">
        <div className="hidden lg:block">
          <img src={login} alt="instagram" className="w-[430px]"/>
        </div>
        <div>
          <form onSubmit={handleLogin} className="bg-white border border-gray-300 w-[350px] p-10">
            <h1 className="text-center text-5xl mb-10" style={{ fontFamily: "cursive" }}>
              Instagram
            </h1>
            <input type="text" placeholder="Phone number, username, or email" className="border bg-gray-50 w-full p-2 text-sm rounded mb-2" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" className="border bg-gray-50 w-full p-2 text-sm rounded mb-4" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className="w-full bg-[#0095F6] text-white py-2 rounded-lg font-semibold">
              Log in
            </button>
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>
            <button type="button" className="w-full text-[#385185] font-semibold">
              Log in with Facebook
            </button>
            <p className="text-center text-xs mt-5 text-gray-600">
              Forgot password?
            </p>
          </form>
          <div className="bg-white border border-gray-300 mt-4 p-5 text-center text-sm">
            Don't have an account?
            <span className="text-blue-500 font-semibold cursor-pointer">
              {" "}
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

