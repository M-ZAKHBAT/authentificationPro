import { useState, useEffect } from "react";
import axios from "axios";
import imageLogin from "../img/imageLogin.png";
import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError("Please enter both email and password.");
        return;
      }
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      // if (response.status === 200) {
      //   localStorage.setItem("token", response.data.token);
      //   navigate("/task");
      // } else {
      //   setError("Incorrect email or password.");
      // }

      if (response.status === 200) {
        const { data } = response;
        if (data.success) {
          localStorage.setItem("token", data.token);
          navigate("/task");
        } else {
          setError(data.message);
        }
      } else {
        setError("Incorrect email or password.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response && error.response.status === 401) {
        setError("Incorrect email or password.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };
  useEffect(() => {
    // Rien à faire ici
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   }
  //   console.log({ token });
  // }, []);
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   // Autres actions à effectuer lors de la déconnexion
  // };
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[-20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-blod my-4">
            Turn your Ideas into reality
          </h1>
          <p className="text-xl text-white font-normal"> start for free</p>
        </div>

        <img src={imageLogin} alt="" className="w-full h-full object-over" />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className="text-xl text-[#060606] font-semibold ">
          Interactive Brand
        </h1>
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-2xl font-semibold mb-4"> Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2 " />
              <p className="text-sm"> Remember Me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forgot Password
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              onClick={handleLogin}
              className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
            >
              Login In
            </button>

            <Link
              to="/register"
              className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center"
            >
              Register
            </Link>
          </div>

          <div className="w-full flex items-center justify-center relative">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="absolute text-[#D9D9D9]">Or</p>
          </div>
          <button className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center">
            Sing IN with Google
          </button>
        </div>
        <div className="w-full flex item-center justify-center">
          <p>
            Dont have a account ?
            <span className="font-semibold underline underline-offset-2 curseur"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
