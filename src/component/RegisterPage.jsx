import { useState } from "react";
import { Link } from "react-router-dom";
import imageLogin from "../img/imageLogin.png";
import axios from "axios";
function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegister = async () => {
    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // if (password !== confirmPassword) {
    //   alert("Passwords do not match.");
    //   return;
    // }

    try {
      const response = await axios.post(
        "http://localhost:4000/users/register",
        {
          username,
          email,
          password,
          //  confirmPassword,
        }
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className="text-xl text-[#060606] font-semibold">
          Register Account
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <p className="text-base mb-2">
              Please enter your username, email, and choose a password to
              register.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
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
            {/* <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            /> */}
          </div>

          <div className="w-full flex flex-col my-4">
            <button
              onClick={handleRegister}
              className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
            >
              Register
            </button>
          </div>
        </div>

        <div className="w-full flex item-center justify-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold underline underline-offset-2 cursor-pointer"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={imageLogin}
          alt="Register Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default RegisterPage;
