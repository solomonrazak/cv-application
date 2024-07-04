import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import goole from "../assets/images/image.jpeg";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //handle error
    const [error, setError] = useState("")
    // context api imported
    const {signUp} = useUserAuth();

    // function to handle signUp
    const handleSubmit = async(e) => {
        
        e.preventDefault();
        setError("")
        try {
            await signUp(email, password);
            navigate("/") // navigate to login or home page
        }
        catch(err){
            setError(err.message);
            alert(error)
        }

    }

    const navigate = useNavigate()
  return (
    <div className="w-screen h-screen" style={{backgroundImage: `url(${goole})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
    <div className="w-full flex justify-center mx-auto">
       <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center bg-gray-100 p-10 mt-11 rounded-md shadow-lg">
      <p className="mb-[2rem] font-medium text-[18px] text-slate-950">Please Sign up here</p>
      
        <input
          type="email"
          placeholder="Email"
          className="w-[350px] text-slate-900 border-b py-2 border-slate-900 outline-none focus:outline-none pl-1 mb-5 b"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[350px] text-black border-b py-2 border-slate-900 outline-none focus:outline-none pl-1"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="bg-blue-400 mt-8 text-center text-white rounded-md hover:bg-blue-600">
          <button className="p-2 font-medium text-[17px]" type="submit">Sign up</button>
        </div>
       
        <p className="mt-7 font-medium">Already have an account?<span className="text-blue-500"><Link to="/"> Log In</Link></span></p>
      </div>
      </form>
     
    </div>
    
    </div>
  );
};

export default Signup;
