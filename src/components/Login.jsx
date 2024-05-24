import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/images/image.jpeg";
import goole from "../assets/images/goole.svg";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPasswordDialogue, setShowPasswordDialogue] = useState(false);
  const [resetEmail, setResetEmail] = useState(""); // New state for reset email
//   const [resetEmail, setResetEmail] = useState("");

  const { logIn, googleSignIn, resetPassword } = useUserAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  }

  // function to handle google signin
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   };

  // function to handle password reset
  const handlePasswordReset = async (e) => {
    e.preventDefault();
   

    try {
     await resetPassword(email)
      
      alert("Password reset email has been sent: check your inbox");
    //   setShowPasswordDialogue(false);
    } catch (err) {
        if (err.code === 'auth/user-not-found') {
            alert('User not found, try again!')
            setEmail('')
          }
    }
   
  };

  return (
    <div className="flex-col w-full h-screen flex md:flex-row relative">
      <div id="image-sesction" className="relative md:w-1/2 h-full">
        <img src={image} alt="logo" className="object-cover h-full" />
        <div className="absolute top-[25%] text-center text-gray-700 leading-[4rem] font-bold text-[35px]">
          <h1 className="]">
            Create the perfect resume to land you your dream job.
          </h1>
          <p className="">Sign up for free now!</p>
        </div>
      </div>
      <div className="px-5 pt-5 mt-8 mx-7 flex flex-col space-y-[35px] pl-10 pb-3">
        <h2 className="font-medium">Dexter Inc.</h2>

        <div>
          <h1 className="font-bold text-[15px] mb-4">Login</h1>
          <p className="text-base">Welcome! Please enter your details.</p>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col mt-8">
              <input
                type="email"
                placeholder="Email"
                className="w-[350px] text-slate-900 border-b py-2 border-slate-900 outline-none focus:outline-none pl-1 mb-5"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Password"
                className="w-[350px] text-black border-b py-2 border-slate-900 outline-none focus:outline-none pl-1"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-between mt-5">
                <div className="flex flex-row-reverse gap-2 items-center">
                  <label className="text-sm text-gray-500">
                    Remember for 30 days
                  </label>
                  <input type="checkbox" />
                </div>

                <p
                  className="text-blue-400 underline cursor-pointer"
                  onClick={(e) =>
                    setShowPasswordDialogue(!showPasswordDialogue)
                  }
                >
                  Forgot Password
                </p>
                {showPasswordDialogue && (
                  <div className="h-[20px] bg-gray-500 flex flex-col absolute top-[99%] md:top-[47%] right-[5%] z-10 gap-2">
                    
                    <input
                    id="resetpass"
                      type="email"
                      className="w-[230px] border-2 border-slate-400 pl-3"
                      value={resetEmail}
                      placeholder="Enter email here"
                      onChange={(e) => setResetEmail(e.target.value)}
                      required
                    />
                    <button
                      className="bg-slate-400 w-[150px] rounded-md ml-[20%] text-white hover:bg-slate-700"
                      onClick={handlePasswordReset}
                    >
                      Reset Passowrd
                    </button>
                  </div>
                )}
              </div>
              <div className="bg-blue-400 mt-8 text-center text-white rounded-md hover:bg-blue-600">
                <button className="p-2 font-medium text-[17px]" type="submit">
                  Log In
                </button>
              </div>
              <p className="flex justify-center my-3 font-medium">or</p>
              <div
                className="flex justify-center gap-4 items-center border border-black font-medium p-2 rounded-md cursor-pointer"
                onClick={handleGoogleSignIn}
              >
                <img src={goole} className="w-[20px] h-[20px]" />
                Sign in with Google
              </div>
            </div>
          </form>
        </div>

        <div className="text-black mb-[-10px]">
          <p>
            Don't have an account?
            <span className="pl-2 text-blue-400 underline">
              <Link to="/signup">Sign up</Link>
            </span>
            <span className="pl-1">now!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
